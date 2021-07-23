/**
 * @fileoverview gRPC-Web generated client stub for pancake.baker
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pancake_pb from './pancake_pb';


export class pancakeBakerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoBake = new grpcWeb.AbstractClientBase.MethodInfo(
    pancake_pb.BakeResponse,
    (request: pancake_pb.BakeRequest) => {
      return request.serializeBinary();
    },
    pancake_pb.BakeResponse.deserializeBinary
  );

  bake(
    request: pancake_pb.BakeRequest,
    metadata: grpcWeb.Metadata | null): Promise<pancake_pb.BakeResponse>;

  bake(
    request: pancake_pb.BakeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: pancake_pb.BakeResponse) => void): grpcWeb.ClientReadableStream<pancake_pb.BakeResponse>;

  bake(
    request: pancake_pb.BakeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: pancake_pb.BakeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pancake.baker.pancakeBakerService/Bake',
        request,
        metadata || {},
        this.methodInfoBake,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pancake.baker.pancakeBakerService/Bake',
    request,
    metadata || {},
    this.methodInfoBake);
  }

  methodInfoReport = new grpcWeb.AbstractClientBase.MethodInfo(
    pancake_pb.ReportResponse,
    (request: pancake_pb.ReportRequest) => {
      return request.serializeBinary();
    },
    pancake_pb.ReportResponse.deserializeBinary
  );

  report(
    request: pancake_pb.ReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<pancake_pb.ReportResponse>;

  report(
    request: pancake_pb.ReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: pancake_pb.ReportResponse) => void): grpcWeb.ClientReadableStream<pancake_pb.ReportResponse>;

  report(
    request: pancake_pb.ReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: pancake_pb.ReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pancake.baker.pancakeBakerService/Report',
        request,
        metadata || {},
        this.methodInfoReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pancake.baker.pancakeBakerService/Report',
    request,
    metadata || {},
    this.methodInfoReport);
  }

}

