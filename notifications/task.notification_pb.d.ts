// package: 
// file: notifications/task.notification.proto

import * as jspb from "google-protobuf";

export class NewTaskNotification extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewTaskNotification.AsObject;
  static toObject(includeInstance: boolean, msg: NewTaskNotification): NewTaskNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewTaskNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewTaskNotification;
  static deserializeBinaryFromReader(message: NewTaskNotification, reader: jspb.BinaryReader): NewTaskNotification;
}

export namespace NewTaskNotification {
  export type AsObject = {
    name: string,
    createdat: string,
  }
}

