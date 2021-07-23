import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Pancake extends jspb.Message {
  getChefName(): string;
  setChefName(value: string): Pancake;

  getMenu(): Pancake.Menu;
  setMenu(value: Pancake.Menu): Pancake;

  getTechnicalScore(): number;
  setTechnicalScore(value: number): Pancake;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Pancake;
  hasCreateTime(): boolean;
  clearCreateTime(): Pancake;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pancake.AsObject;
  static toObject(includeInstance: boolean, msg: Pancake): Pancake.AsObject;
  static serializeBinaryToWriter(message: Pancake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pancake;
  static deserializeBinaryFromReader(message: Pancake, reader: jspb.BinaryReader): Pancake;
}

export namespace Pancake {
  export type AsObject = {
    chefName: string,
    menu: Pancake.Menu,
    technicalScore: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum Menu { 
    UNKNOWN = 0,
    CLASSIC = 1,
    BANANA_AND_WHIP = 2,
    BACON_AND_CHEESE = 3,
    MIX_BERRY = 4,
    BAKED_MARSHMALLOW = 5,
    SPICY_CURRY = 6,
  }
}

export class Report extends jspb.Message {
  getBakeCountsList(): Array<Report.BakeCount>;
  setBakeCountsList(value: Array<Report.BakeCount>): Report;
  clearBakeCountsList(): Report;
  addBakeCounts(value?: Report.BakeCount, index?: number): Report.BakeCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    bakeCountsList: Array<Report.BakeCount.AsObject>,
  }

  export class BakeCount extends jspb.Message {
    getMenu(): Pancake.Menu;
    setMenu(value: Pancake.Menu): BakeCount;

    getCount(): number;
    setCount(value: number): BakeCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BakeCount.AsObject;
    static toObject(includeInstance: boolean, msg: BakeCount): BakeCount.AsObject;
    static serializeBinaryToWriter(message: BakeCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BakeCount;
    static deserializeBinaryFromReader(message: BakeCount, reader: jspb.BinaryReader): BakeCount;
  }

  export namespace BakeCount {
    export type AsObject = {
      menu: Pancake.Menu,
      count: number,
    }
  }

}

export class BakeRequest extends jspb.Message {
  getMenu(): Pancake.Menu;
  setMenu(value: Pancake.Menu): BakeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BakeRequest): BakeRequest.AsObject;
  static serializeBinaryToWriter(message: BakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BakeRequest;
  static deserializeBinaryFromReader(message: BakeRequest, reader: jspb.BinaryReader): BakeRequest;
}

export namespace BakeRequest {
  export type AsObject = {
    menu: Pancake.Menu,
  }
}

export class BakeResponse extends jspb.Message {
  getPancake(): Pancake | undefined;
  setPancake(value?: Pancake): BakeResponse;
  hasPancake(): boolean;
  clearPancake(): BakeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BakeResponse): BakeResponse.AsObject;
  static serializeBinaryToWriter(message: BakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BakeResponse;
  static deserializeBinaryFromReader(message: BakeResponse, reader: jspb.BinaryReader): BakeResponse;
}

export namespace BakeResponse {
  export type AsObject = {
    pancake?: Pancake.AsObject,
  }
}

export class ReportRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportRequest): ReportRequest.AsObject;
  static serializeBinaryToWriter(message: ReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportRequest;
  static deserializeBinaryFromReader(message: ReportRequest, reader: jspb.BinaryReader): ReportRequest;
}

export namespace ReportRequest {
  export type AsObject = {
  }
}

export class ReportResponse extends jspb.Message {
  getReport(): Report | undefined;
  setReport(value?: Report): ReportResponse;
  hasReport(): boolean;
  clearReport(): ReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportResponse): ReportResponse.AsObject;
  static serializeBinaryToWriter(message: ReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportResponse;
  static deserializeBinaryFromReader(message: ReportResponse, reader: jspb.BinaryReader): ReportResponse;
}

export namespace ReportResponse {
  export type AsObject = {
    report?: Report.AsObject,
  }
}

