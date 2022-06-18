package server

import (
	"github.com/emcfarlane/lark-next/apipb"
	"github.com/emcfarlane/larking"
)

type Server struct {
	apipb.UnimplementedTutorialsServer
}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) RegisterServices(mux *larking.Mux) {
	mux.RegisterService(&apipb.Tutorials_ServiceDesc, s)
}
