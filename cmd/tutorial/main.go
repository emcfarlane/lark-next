package main

import (
	"context"
	"flag"
	"log"
	"net"
	"os"

	"github.com/emcfarlane/lark-next/server"
	"github.com/emcfarlane/larking"
)

const defaultPort = "8000" // default port

func env(key, def string) string {
	if e := os.Getenv(key); e != "" {
		return e
	}
	return def
}

var (
	flagPort = flag.String("port", env("PORT", defaultPort), "Local address to listen on.")
)

func run() error {
	ctx := context.Background()
	ctx, cancel := larking.NewOSSignalContext(ctx)
	defer cancel()

	l, err := net.Listen("tcp", ":"+*flagPort)
	if err != nil {
		return err
	}
	defer l.Close()

	svr := &server.Server{}

	mux, err := larking.NewMux()
	if err != nil {
		return err
	}
	svr.RegisterServices(mux)

	svrOpts := []larking.ServerOption{
		larking.InsecureServerOption(),
	}

	s, err := larking.NewServer(mux, svrOpts...)
	if err != nil {
		return err
	}

	go func() {
		log.Printf("listening on address: %s", l.Addr())
		if err := s.Serve(l); err != nil {
			log.Printf("server stopped: %v", err)
		}
		cancel()
	}()
	<-ctx.Done()
	return s.Shutdown(ctx)
}

func main() {
	flag.Parse()

	if err := run(); err != nil {
		log.Printf("service errored: %v", err)
		os.Exit(1)
	}
	log.Println("service stopped")
}
