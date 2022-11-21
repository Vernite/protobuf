/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: messages/message.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class NewTaskNotification extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        test?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("test" in data && data.test != undefined) {
                this.test = data.test;
            }
        }
    }
    get test() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set test(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        test?: string;
    }): NewTaskNotification {
        const message = new NewTaskNotification({});
        if (data.test != null) {
            message.test = data.test;
        }
        return message;
    }
    toObject() {
        const data: {
            test?: string;
        } = {};
        if (this.test != null) {
            data.test = this.test;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.test.length)
            writer.writeString(1, this.test);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NewTaskNotification {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NewTaskNotification();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.test = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static override deserializeBinary(bytes: Uint8Array): NewTaskNotification {
        return NewTaskNotification.deserialize(bytes);
    }
}