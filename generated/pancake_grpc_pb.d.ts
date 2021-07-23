// GENERATED CODE -- DO NOT EDIT!

// package: pancake.baker
// file: pancake.proto

import * as pancake_pb from "./pancake_pb";
import * as grpc from "@grpc/grpc-js";

interface IpancakeBakerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  bake: grpc.MethodDefinition<pancake_pb.BakeRequest, pancake_pb.BakeResponse>;
  report: grpc.MethodDefinition<pancake_pb.ReportRequest, pancake_pb.ReportResponse>;
}

export const pancakeBakerServiceService: IpancakeBakerServiceService;

export interface IpancakeBakerServiceServer extends grpc.UntypedServiceImplementation {
  bake: grpc.handleUnaryCall<pancake_pb.BakeRequest, pancake_pb.BakeResponse>;
  report: grpc.handleUnaryCall<pancake_pb.ReportRequest, pancake_pb.ReportResponse>;
}

export class pancakeBakerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  bake(argument: pancake_pb.BakeRequest, callback: grpc.requestCallback<pancake_pb.BakeResponse>): grpc.ClientUnaryCall;
  bake(argument: pancake_pb.BakeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pancake_pb.BakeResponse>): grpc.ClientUnaryCall;
  bake(argument: pancake_pb.BakeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pancake_pb.BakeResponse>): grpc.ClientUnaryCall;
  report(argument: pancake_pb.ReportRequest, callback: grpc.requestCallback<pancake_pb.ReportResponse>): grpc.ClientUnaryCall;
  report(argument: pancake_pb.ReportRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pancake_pb.ReportResponse>): grpc.ClientUnaryCall;
  report(argument: pancake_pb.ReportRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pancake_pb.ReportResponse>): grpc.ClientUnaryCall;
}
