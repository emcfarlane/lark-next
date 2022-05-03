/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty";
import { BrowserHeaders } from "browser-headers";
import { Timestamp } from "../google/protobuf/timestamp";
import { FieldMask } from "../google/protobuf/field_mask";

export const protobufPackage = "api";

export interface Tutorial {
  /** Tutorial resource name. */
  name: string;
  title: string;
  subTitle: string;
  url: string;
  createTime: string | undefined;
}

export interface GetTutorialRequest {
  name: string;
}

export interface ListTutorialsRequest {
  /** The maximum number of items to return. */
  pageSize: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken: Uint8Array;
}

export interface ListTutorialsResponse {
  /**
   * The field name should match the noun "tutorials" in the method name.  There
   * will be a maximum number of items returned based on the page_size field
   * in the request.
   */
  tutorials: Tutorial[];
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: Uint8Array;
}

export interface CreateTutorialRequest {
  /**
   * The tutorial resource to create.
   * The field name should match the Noun in the method name.
   */
  tutorial: Tutorial | undefined;
}

export interface UpdateTutorialRequest {
  /** The tutorial resource which replaces the resource on the server. */
  tutorial: Tutorial | undefined;
  /**
   * The update mask applies to the resource. For the `FieldMask` definition,
   * see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  updateMask: string[] | undefined;
}

export interface DeleteTutorialRequest {
  /**
   * The resource name of the book to be deleted, for example:
   * "tutorials/tutorial1"
   */
  name: string;
}

function createBaseTutorial(): Tutorial {
  return { name: "", title: "", subTitle: "", url: "", createTime: undefined };
}

export const Tutorial = {
  encode(
    message: Tutorial,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.subTitle !== "") {
      writer.uint32(26).string(message.subTitle);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tutorial {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTutorial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.subTitle = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.createTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tutorial {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      subTitle: isSet(object.subTitle) ? String(object.subTitle) : "",
      url: isSet(object.url) ? String(object.url) : "",
      createTime: isSet(object.createTime)
        ? String(object.createTime)
        : undefined,
    };
  },

  toJSON(message: Tutorial): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    message.subTitle !== undefined && (obj.subTitle = message.subTitle);
    message.url !== undefined && (obj.url = message.url);
    message.createTime !== undefined && (obj.createTime = message.createTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tutorial>, I>>(object: I): Tutorial {
    const message = createBaseTutorial();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.subTitle = object.subTitle ?? "";
    message.url = object.url ?? "";
    message.createTime = object.createTime ?? undefined;
    return message;
  },
};

function createBaseGetTutorialRequest(): GetTutorialRequest {
  return { name: "" };
}

export const GetTutorialRequest = {
  encode(
    message: GetTutorialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTutorialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTutorialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTutorialRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: GetTutorialRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTutorialRequest>, I>>(
    object: I
  ): GetTutorialRequest {
    const message = createBaseGetTutorialRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListTutorialsRequest(): ListTutorialsRequest {
  return { pageSize: 0, pageToken: new Uint8Array() };
}

export const ListTutorialsRequest = {
  encode(
    message: ListTutorialsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken.length !== 0) {
      writer.uint32(18).bytes(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTutorialsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTutorialsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = reader.int32();
          break;
        case 2:
          message.pageToken = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTutorialsRequest {
    return {
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken)
        ? bytesFromBase64(object.pageToken)
        : new Uint8Array(),
    };
  },

  toJSON(message: ListTutorialsRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined &&
      (obj.pageToken = base64FromBytes(
        message.pageToken !== undefined ? message.pageToken : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTutorialsRequest>, I>>(
    object: I
  ): ListTutorialsRequest {
    const message = createBaseListTutorialsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? new Uint8Array();
    return message;
  },
};

function createBaseListTutorialsResponse(): ListTutorialsResponse {
  return { tutorials: [], nextPageToken: new Uint8Array() };
}

export const ListTutorialsResponse = {
  encode(
    message: ListTutorialsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tutorials) {
      Tutorial.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken.length !== 0) {
      writer.uint32(18).bytes(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTutorialsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTutorialsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tutorials.push(Tutorial.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTutorialsResponse {
    return {
      tutorials: Array.isArray(object?.tutorials)
        ? object.tutorials.map((e: any) => Tutorial.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? bytesFromBase64(object.nextPageToken)
        : new Uint8Array(),
    };
  },

  toJSON(message: ListTutorialsResponse): unknown {
    const obj: any = {};
    if (message.tutorials) {
      obj.tutorials = message.tutorials.map((e) =>
        e ? Tutorial.toJSON(e) : undefined
      );
    } else {
      obj.tutorials = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = base64FromBytes(
        message.nextPageToken !== undefined
          ? message.nextPageToken
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTutorialsResponse>, I>>(
    object: I
  ): ListTutorialsResponse {
    const message = createBaseListTutorialsResponse();
    message.tutorials =
      object.tutorials?.map((e) => Tutorial.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateTutorialRequest(): CreateTutorialRequest {
  return { tutorial: undefined };
}

export const CreateTutorialRequest = {
  encode(
    message: CreateTutorialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tutorial !== undefined) {
      Tutorial.encode(message.tutorial, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTutorialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTutorialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tutorial = Tutorial.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTutorialRequest {
    return {
      tutorial: isSet(object.tutorial)
        ? Tutorial.fromJSON(object.tutorial)
        : undefined,
    };
  },

  toJSON(message: CreateTutorialRequest): unknown {
    const obj: any = {};
    message.tutorial !== undefined &&
      (obj.tutorial = message.tutorial
        ? Tutorial.toJSON(message.tutorial)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTutorialRequest>, I>>(
    object: I
  ): CreateTutorialRequest {
    const message = createBaseCreateTutorialRequest();
    message.tutorial =
      object.tutorial !== undefined && object.tutorial !== null
        ? Tutorial.fromPartial(object.tutorial)
        : undefined;
    return message;
  },
};

function createBaseUpdateTutorialRequest(): UpdateTutorialRequest {
  return { tutorial: undefined, updateMask: undefined };
}

export const UpdateTutorialRequest = {
  encode(
    message: UpdateTutorialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tutorial !== undefined) {
      Tutorial.encode(message.tutorial, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTutorialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTutorialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tutorial = Tutorial.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTutorialRequest {
    return {
      tutorial: isSet(object.tutorial)
        ? Tutorial.fromJSON(object.tutorial)
        : undefined,
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
    };
  },

  toJSON(message: UpdateTutorialRequest): unknown {
    const obj: any = {};
    message.tutorial !== undefined &&
      (obj.tutorial = message.tutorial
        ? Tutorial.toJSON(message.tutorial)
        : undefined);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTutorialRequest>, I>>(
    object: I
  ): UpdateTutorialRequest {
    const message = createBaseUpdateTutorialRequest();
    message.tutorial =
      object.tutorial !== undefined && object.tutorial !== null
        ? Tutorial.fromPartial(object.tutorial)
        : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseDeleteTutorialRequest(): DeleteTutorialRequest {
  return { name: "" };
}

export const DeleteTutorialRequest = {
  encode(
    message: DeleteTutorialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTutorialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTutorialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTutorialRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: DeleteTutorialRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTutorialRequest>, I>>(
    object: I
  ): DeleteTutorialRequest {
    const message = createBaseDeleteTutorialRequest();
    message.name = object.name ?? "";
    return message;
  },
};

export interface Tutorials {
  /** Get a tutorial. */
  GetTutorial(
    request: DeepPartial<GetTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Tutorial>;
  /** Lists tutorials. */
  ListTutorials(
    request: DeepPartial<ListTutorialsRequest>,
    metadata?: grpc.Metadata
  ): Promise<ListTutorialsResponse>;
  /** Creates a tutorial. */
  CreateTutorial(
    request: DeepPartial<CreateTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Tutorial>;
  /** Updates a tutorial. */
  UpdateTutorial(
    request: DeepPartial<UpdateTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Tutorial>;
  /** Deletes a tutorial. */
  DeleteTutorial(
    request: DeepPartial<DeleteTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class TutorialsClientImpl implements Tutorials {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetTutorial = this.GetTutorial.bind(this);
    this.ListTutorials = this.ListTutorials.bind(this);
    this.CreateTutorial = this.CreateTutorial.bind(this);
    this.UpdateTutorial = this.UpdateTutorial.bind(this);
    this.DeleteTutorial = this.DeleteTutorial.bind(this);
  }

  GetTutorial(
    request: DeepPartial<GetTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Tutorial> {
    return this.rpc.unary(
      TutorialsGetTutorialDesc,
      GetTutorialRequest.fromPartial(request),
      metadata
    );
  }

  ListTutorials(
    request: DeepPartial<ListTutorialsRequest>,
    metadata?: grpc.Metadata
  ): Promise<ListTutorialsResponse> {
    return this.rpc.unary(
      TutorialsListTutorialsDesc,
      ListTutorialsRequest.fromPartial(request),
      metadata
    );
  }

  CreateTutorial(
    request: DeepPartial<CreateTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Tutorial> {
    return this.rpc.unary(
      TutorialsCreateTutorialDesc,
      CreateTutorialRequest.fromPartial(request),
      metadata
    );
  }

  UpdateTutorial(
    request: DeepPartial<UpdateTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Tutorial> {
    return this.rpc.unary(
      TutorialsUpdateTutorialDesc,
      UpdateTutorialRequest.fromPartial(request),
      metadata
    );
  }

  DeleteTutorial(
    request: DeepPartial<DeleteTutorialRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      TutorialsDeleteTutorialDesc,
      DeleteTutorialRequest.fromPartial(request),
      metadata
    );
  }
}

export const TutorialsDesc = {
  serviceName: "api.Tutorials",
};

export const TutorialsGetTutorialDesc: UnaryMethodDefinitionish = {
  methodName: "GetTutorial",
  service: TutorialsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetTutorialRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Tutorial.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const TutorialsListTutorialsDesc: UnaryMethodDefinitionish = {
  methodName: "ListTutorials",
  service: TutorialsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListTutorialsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ListTutorialsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const TutorialsCreateTutorialDesc: UnaryMethodDefinitionish = {
  methodName: "CreateTutorial",
  service: TutorialsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateTutorialRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Tutorial.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const TutorialsUpdateTutorialDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateTutorial",
  service: TutorialsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UpdateTutorialRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Tutorial.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const TutorialsDeleteTutorialDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteTutorial",
  service: TutorialsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteTutorialRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(dateStr: string): Timestamp {
  const date = new Date(dateStr);
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): string {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis).toISOString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
