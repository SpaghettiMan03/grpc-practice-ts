// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pancake_pb = require('./pancake_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pancake_baker_BakeRequest(arg) {
  if (!(arg instanceof pancake_pb.BakeRequest)) {
    throw new Error('Expected argument of type pancake.baker.BakeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pancake_baker_BakeRequest(buffer_arg) {
  return pancake_pb.BakeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pancake_baker_BakeResponse(arg) {
  if (!(arg instanceof pancake_pb.BakeResponse)) {
    throw new Error('Expected argument of type pancake.baker.BakeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pancake_baker_BakeResponse(buffer_arg) {
  return pancake_pb.BakeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pancake_baker_ReportRequest(arg) {
  if (!(arg instanceof pancake_pb.ReportRequest)) {
    throw new Error('Expected argument of type pancake.baker.ReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pancake_baker_ReportRequest(buffer_arg) {
  return pancake_pb.ReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pancake_baker_ReportResponse(arg) {
  if (!(arg instanceof pancake_pb.ReportResponse)) {
    throw new Error('Expected argument of type pancake.baker.ReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pancake_baker_ReportResponse(buffer_arg) {
  return pancake_pb.ReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var pancakeBakerServiceService = exports.pancakeBakerServiceService = {
  // Bake は指定されたメニューのパンケーキを焼くメソッドです。
// 焼かれたパンケーキをレスポンスとして返します。
bake: {
    path: '/pancake.baker.pancakeBakerService/Bake',
    requestStream: false,
    responseStream: false,
    requestType: pancake_pb.BakeRequest,
    responseType: pancake_pb.BakeResponse,
    requestSerialize: serialize_pancake_baker_BakeRequest,
    requestDeserialize: deserialize_pancake_baker_BakeRequest,
    responseSerialize: serialize_pancake_baker_BakeResponse,
    responseDeserialize: deserialize_pancake_baker_BakeResponse,
  },
  // Report はメニューごとに焼いたパンケーキの数を返します。
report: {
    path: '/pancake.baker.pancakeBakerService/Report',
    requestStream: false,
    responseStream: false,
    requestType: pancake_pb.ReportRequest,
    responseType: pancake_pb.ReportResponse,
    requestSerialize: serialize_pancake_baker_ReportRequest,
    requestDeserialize: deserialize_pancake_baker_ReportRequest,
    responseSerialize: serialize_pancake_baker_ReportResponse,
    responseDeserialize: deserialize_pancake_baker_ReportResponse,
  },
};

exports.pancakeBakerServiceClient = grpc.makeGenericClientConstructor(pancakeBakerServiceService);
