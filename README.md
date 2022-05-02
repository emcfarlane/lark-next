This is a [Next.js](https://nextjs.org/) project bootstrapped with 
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
with backend server written with [larking.io](https://larking.io) go libraries.

It demo's the gRPC-web intergration with typescrupt support. Libraries use:
- [ts-proto](https://github.com/stephenh/ts-proto) - library for generating protobuffers.
- [@improbable-eng/grpc-web](https://www.npmjs.com/package/@improbable-eng/grpc-web) - client library for gRPC-Web transport.
- [swr](https://www.npmjs.com/package/swr) - hooks library for data fetching.

## Getting Started

Please see docs, or get in touch for support and feedback!
First, run the development server:

```bash
npm run dev
```

Then, run the backend server:
```bash
go run ./cmd/tutorial
```

### Build

Generate protobuffers:
```
protoc --go_out=paths=source_relative:. --go-grpc_out=paths=source_relative:. --ts_proto_out=. --ts_proto_opt=esModuleInterop=true,useDate=string ./apipb/*.proto
```
