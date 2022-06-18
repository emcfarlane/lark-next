package server

import (
	"context"
	"strings"
	"time"

	"github.com/emcfarlane/lark-next/apipb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type Tutorial struct {
	ID         string
	Title      string
	SubTitle   string
	URL        string
	CreateTime time.Time
}

var (
	tutorials = []Tutorial{{
		ID:         "1",
		Title:      "Larking.io",
		SubTitle:   "Go libraries for backend services. Build ",
		URL:        "http://larking.io/docs",
		CreateTime: time.Now(),
	}, {
		ID:         "2",
		Title:      "Next.js",
		SubTitle:   "Get started with the next.js documentation.",
		URL:        "https://nextjs.org/docs",
		CreateTime: time.Now(),
	}}
	tutorialsIndex = func() map[string]int {
		m := make(map[string]int)
		for i, t := range tutorials {
			m[t.ID] = i
		}
		return m
	}()
)

func (s *Server) toTutorial(ctx context.Context, t *Tutorial) (*apipb.Tutorial, error) {
	return &apipb.Tutorial{
		Name:       "tutorials/" + t.ID,
		Title:      t.Title,
		SubTitle:   t.SubTitle,
		Url:        t.URL,
		CreateTime: timestamppb.New(t.CreateTime),
	}, nil
}

func (s *Server) GetTutorial(ctx context.Context, req *apipb.GetTutorialRequest) (*apipb.Tutorial, error) {
	i, ok := tutorialsIndex[strings.TrimPrefix(req.Name, "tutorials/")]
	if !ok {
		return nil, status.Errorf(codes.NotFound, "not found: %v", req.Name)
	}
	t := &tutorials[i]
	return s.toTutorial(ctx, t)
}

func (s *Server) ListTutorials(ctx context.Context, req *apipb.ListTutorialsRequest) (*apipb.ListTutorialsResponse, error) {
	i := 0
	if tok := req.PageToken; tok != nil {
		i = tutorialsIndex[string(tok)]
	}

	size := 10
	if pageSize := req.PageSize; pageSize > 0 {
		size = int(pageSize)
	}

	var (
		vs      []*apipb.Tutorial
		nextTok string
	)
	for ; i < i+size; i++ {
		if i >= len(tutorials) {
			nextTok = "" // none
			break
		}
		t := &tutorials[i]
		nextTok = t.ID
		v, err := s.toTutorial(ctx, t)
		if err != nil {
			return nil, err
		}
		vs = append(vs, v)
	}

	return &apipb.ListTutorialsResponse{
		Tutorials:     vs,
		NextPageToken: []byte(nextTok),
	}, nil
}
