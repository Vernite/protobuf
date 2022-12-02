import * as pb_1 from "google-protobuf";
export declare namespace vernite {
    enum BasicAction {
        ADDED = 0,
        UPDATED = 1,
        REMOVED = 2
    }
    class KeepAlive extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            id?: number;
        });
        get id(): number;
        set id(value: number);
        static fromObject(data: {
            id?: number;
        }): KeepAlive;
        toObject(): {
            id?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): KeepAlive;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): KeepAlive;
    }
    class CommunicatorModel extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): CommunicatorModel;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CommunicatorModel;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CommunicatorModel;
    }
    namespace CommunicatorModel {
        class Channel extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                id?: string;
                name?: string;
                user?: string;
                channel?: boolean;
                team?: string;
                provider?: string;
            });
            get id(): string;
            set id(value: string);
            get name(): string;
            set name(value: string);
            get user(): string;
            set user(value: string);
            get channel(): boolean;
            set channel(value: boolean);
            get team(): string;
            set team(value: string);
            get provider(): string;
            set provider(value: string);
            static fromObject(data: {
                id?: string;
                name?: string;
                user?: string;
                channel?: boolean;
                team?: string;
                provider?: string;
            }): Channel;
            toObject(): {
                id?: string;
                name?: string;
                user?: string;
                channel?: boolean;
                team?: string;
                provider?: string;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Channel;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): Channel;
        }
        class ChatUser extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                id?: string;
                team?: string;
                name?: string;
                displayName?: string;
                bot?: boolean;
                avatar?: string;
                provider?: string;
            });
            get id(): string;
            set id(value: string);
            get team(): string;
            set team(value: string);
            get name(): string;
            set name(value: string);
            get displayName(): string;
            set displayName(value: string);
            get bot(): boolean;
            set bot(value: boolean);
            get avatar(): string;
            set avatar(value: string);
            get provider(): string;
            set provider(value: string);
            static fromObject(data: {
                id?: string;
                team?: string;
                name?: string;
                displayName?: string;
                bot?: boolean;
                avatar?: string;
                provider?: string;
            }): ChatUser;
            toObject(): {
                id?: string;
                team?: string;
                name?: string;
                displayName?: string;
                bot?: boolean;
                avatar?: string;
                provider?: string;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChatUser;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): ChatUser;
        }
        class Message extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                id?: string;
                user?: string;
                channel?: string;
                content?: string;
                timestamp?: number;
                provider?: string;
            });
            get id(): string;
            set id(value: string);
            get user(): string;
            set user(value: string);
            get channel(): string;
            set channel(value: string);
            get content(): string;
            set content(value: string);
            get timestamp(): number;
            set timestamp(value: number);
            get provider(): string;
            set provider(value: string);
            static fromObject(data: {
                id?: string;
                user?: string;
                channel?: string;
                content?: string;
                timestamp?: number;
                provider?: string;
            }): Message;
            toObject(): {
                id?: string;
                user?: string;
                channel?: string;
                content?: string;
                timestamp?: number;
                provider?: string;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): Message;
        }
        class SendMessage extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                channel?: string;
                content?: string;
                provider?: string;
            });
            get channel(): string;
            set channel(value: string);
            get content(): string;
            set content(value: string);
            get provider(): string;
            set provider(value: string);
            static fromObject(data: {
                channel?: string;
                content?: string;
                provider?: string;
            }): SendMessage;
            toObject(): {
                channel?: string;
                content?: string;
                provider?: string;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendMessage;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): SendMessage;
        }
    }
    class Task extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            id?: number;
            name?: string;
            description?: string;
            createdAt?: number;
            type?: number;
            priority?: string;
            statusId?: number;
            createdBy?: number;
            projectId?: number;
            action?: BasicAction;
        });
        get id(): number;
        set id(value: number);
        get name(): string;
        set name(value: string);
        get description(): string;
        set description(value: string);
        get createdAt(): number;
        set createdAt(value: number);
        get type(): number;
        set type(value: number);
        get priority(): string;
        set priority(value: string);
        get statusId(): number;
        set statusId(value: number);
        get createdBy(): number;
        set createdBy(value: number);
        get projectId(): number;
        set projectId(value: number);
        get action(): BasicAction;
        set action(value: BasicAction);
        static fromObject(data: {
            id?: number;
            name?: string;
            description?: string;
            createdAt?: number;
            type?: number;
            priority?: string;
            statusId?: number;
            createdBy?: number;
            projectId?: number;
            action?: BasicAction;
        }): Task;
        toObject(): {
            id?: number;
            name?: string;
            description?: string;
            createdAt?: number;
            type?: number;
            priority?: string;
            statusId?: number;
            createdBy?: number;
            projectId?: number;
            action?: BasicAction;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Task;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Task;
    }
}
//# sourceMappingURL=vernite.d.ts.map