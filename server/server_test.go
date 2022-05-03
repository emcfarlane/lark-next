package server

import (
	"testing"

	"github.com/emcfarlane/larking"
	"github.com/emcfarlane/larking/starlib"
	"go.starlark.net/starlark"
)

func TestScripts(t *testing.T) {
	s := NewServer()

	mux, err := larking.NewMux()
	if err != nil {
		t.Fatal(err)
	}
	s.RegisterServices(mux)

	// Run the tests, pass the mux as a global so our testing code can call it directly.
	// Another way of getting testing code to call our server is to use a socket
	// and run the server on localhost.
	starlib.RunTests(t, "testdata/*.star", starlark.StringDict{
		"mux": mux,
	})
}
