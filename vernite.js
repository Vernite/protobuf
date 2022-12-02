var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
import * as pb_1 from "google-protobuf";
export var vernite;
(function (vernite) {
    var _KeepAlive_one_of_decls, _CommunicatorModel_one_of_decls, _Task_one_of_decls;
    let BasicAction;
    (function (BasicAction) {
        BasicAction[BasicAction["ADDED"] = 0] = "ADDED";
        BasicAction[BasicAction["UPDATED"] = 1] = "UPDATED";
        BasicAction[BasicAction["REMOVED"] = 2] = "REMOVED";
    })(BasicAction = vernite.BasicAction || (vernite.BasicAction = {}));
    class KeepAlive extends pb_1.Message {
        constructor(data) {
            super();
            _KeepAlive_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _KeepAlive_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        }
        set id(value) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data) {
            const message = new KeepAlive({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt64(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new KeepAlive();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return KeepAlive.deserialize(bytes);
        }
    }
    _KeepAlive_one_of_decls = new WeakMap();
    vernite.KeepAlive = KeepAlive;
    class CommunicatorModel extends pb_1.Message {
        constructor(data) {
            super();
            _CommunicatorModel_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CommunicatorModel_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data) {
            const message = new CommunicatorModel({});
            return message;
        }
        toObject() {
            const data = {};
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CommunicatorModel();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return CommunicatorModel.deserialize(bytes);
        }
    }
    _CommunicatorModel_one_of_decls = new WeakMap();
    vernite.CommunicatorModel = CommunicatorModel;
    (function (CommunicatorModel) {
        var _Channel_one_of_decls, _ChatUser_one_of_decls, _Message_one_of_decls, _SendMessage_one_of_decls;
        class Channel extends pb_1.Message {
            constructor(data) {
                super();
                _Channel_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Channel_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("id" in data && data.id != undefined) {
                        this.id = data.id;
                    }
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("user" in data && data.user != undefined) {
                        this.user = data.user;
                    }
                    if ("channel" in data && data.channel != undefined) {
                        this.channel = data.channel;
                    }
                    if ("team" in data && data.team != undefined) {
                        this.team = data.team;
                    }
                    if ("provider" in data && data.provider != undefined) {
                        this.provider = data.provider;
                    }
                }
            }
            get id() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get user() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set user(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get channel() {
                return pb_1.Message.getFieldWithDefault(this, 4, false);
            }
            set channel(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get team() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set team(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get provider() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set provider(value) {
                pb_1.Message.setField(this, 6, value);
            }
            static fromObject(data) {
                const message = new Channel({});
                if (data.id != null) {
                    message.id = data.id;
                }
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.user != null) {
                    message.user = data.user;
                }
                if (data.channel != null) {
                    message.channel = data.channel;
                }
                if (data.team != null) {
                    message.team = data.team;
                }
                if (data.provider != null) {
                    message.provider = data.provider;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.id != null) {
                    data.id = this.id;
                }
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.user != null) {
                    data.user = this.user;
                }
                if (this.channel != null) {
                    data.channel = this.channel;
                }
                if (this.team != null) {
                    data.team = this.team;
                }
                if (this.provider != null) {
                    data.provider = this.provider;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.id.length)
                    writer.writeString(1, this.id);
                if (this.name.length)
                    writer.writeString(2, this.name);
                if (this.user.length)
                    writer.writeString(3, this.user);
                if (this.channel != false)
                    writer.writeBool(4, this.channel);
                if (this.team.length)
                    writer.writeString(5, this.team);
                if (this.provider.length)
                    writer.writeString(6, this.provider);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Channel();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.id = reader.readString();
                            break;
                        case 2:
                            message.name = reader.readString();
                            break;
                        case 3:
                            message.user = reader.readString();
                            break;
                        case 4:
                            message.channel = reader.readBool();
                            break;
                        case 5:
                            message.team = reader.readString();
                            break;
                        case 6:
                            message.provider = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Channel.deserialize(bytes);
            }
        }
        _Channel_one_of_decls = new WeakMap();
        CommunicatorModel.Channel = Channel;
        class ChatUser extends pb_1.Message {
            constructor(data) {
                super();
                _ChatUser_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChatUser_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("id" in data && data.id != undefined) {
                        this.id = data.id;
                    }
                    if ("team" in data && data.team != undefined) {
                        this.team = data.team;
                    }
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("displayName" in data && data.displayName != undefined) {
                        this.displayName = data.displayName;
                    }
                    if ("bot" in data && data.bot != undefined) {
                        this.bot = data.bot;
                    }
                    if ("avatar" in data && data.avatar != undefined) {
                        this.avatar = data.avatar;
                    }
                    if ("provider" in data && data.provider != undefined) {
                        this.provider = data.provider;
                    }
                }
            }
            get id() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get team() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set team(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get displayName() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set displayName(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get bot() {
                return pb_1.Message.getFieldWithDefault(this, 5, false);
            }
            set bot(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get avatar() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set avatar(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get provider() {
                return pb_1.Message.getFieldWithDefault(this, 7, "");
            }
            set provider(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new ChatUser({});
                if (data.id != null) {
                    message.id = data.id;
                }
                if (data.team != null) {
                    message.team = data.team;
                }
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.displayName != null) {
                    message.displayName = data.displayName;
                }
                if (data.bot != null) {
                    message.bot = data.bot;
                }
                if (data.avatar != null) {
                    message.avatar = data.avatar;
                }
                if (data.provider != null) {
                    message.provider = data.provider;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.id != null) {
                    data.id = this.id;
                }
                if (this.team != null) {
                    data.team = this.team;
                }
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.displayName != null) {
                    data.displayName = this.displayName;
                }
                if (this.bot != null) {
                    data.bot = this.bot;
                }
                if (this.avatar != null) {
                    data.avatar = this.avatar;
                }
                if (this.provider != null) {
                    data.provider = this.provider;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.id.length)
                    writer.writeString(1, this.id);
                if (this.team.length)
                    writer.writeString(2, this.team);
                if (this.name.length)
                    writer.writeString(3, this.name);
                if (this.displayName.length)
                    writer.writeString(4, this.displayName);
                if (this.bot != false)
                    writer.writeBool(5, this.bot);
                if (this.avatar.length)
                    writer.writeString(6, this.avatar);
                if (this.provider.length)
                    writer.writeString(7, this.provider);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChatUser();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.id = reader.readString();
                            break;
                        case 2:
                            message.team = reader.readString();
                            break;
                        case 3:
                            message.name = reader.readString();
                            break;
                        case 4:
                            message.displayName = reader.readString();
                            break;
                        case 5:
                            message.bot = reader.readBool();
                            break;
                        case 6:
                            message.avatar = reader.readString();
                            break;
                        case 7:
                            message.provider = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return ChatUser.deserialize(bytes);
            }
        }
        _ChatUser_one_of_decls = new WeakMap();
        CommunicatorModel.ChatUser = ChatUser;
        class Message extends pb_1.Message {
            constructor(data) {
                super();
                _Message_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Message_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("id" in data && data.id != undefined) {
                        this.id = data.id;
                    }
                    if ("user" in data && data.user != undefined) {
                        this.user = data.user;
                    }
                    if ("channel" in data && data.channel != undefined) {
                        this.channel = data.channel;
                    }
                    if ("content" in data && data.content != undefined) {
                        this.content = data.content;
                    }
                    if ("timestamp" in data && data.timestamp != undefined) {
                        this.timestamp = data.timestamp;
                    }
                    if ("provider" in data && data.provider != undefined) {
                        this.provider = data.provider;
                    }
                }
            }
            get id() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get user() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set user(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get channel() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set channel(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get content() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set content(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get timestamp() {
                return pb_1.Message.getFieldWithDefault(this, 5, 0);
            }
            set timestamp(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get provider() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set provider(value) {
                pb_1.Message.setField(this, 6, value);
            }
            static fromObject(data) {
                const message = new Message({});
                if (data.id != null) {
                    message.id = data.id;
                }
                if (data.user != null) {
                    message.user = data.user;
                }
                if (data.channel != null) {
                    message.channel = data.channel;
                }
                if (data.content != null) {
                    message.content = data.content;
                }
                if (data.timestamp != null) {
                    message.timestamp = data.timestamp;
                }
                if (data.provider != null) {
                    message.provider = data.provider;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.id != null) {
                    data.id = this.id;
                }
                if (this.user != null) {
                    data.user = this.user;
                }
                if (this.channel != null) {
                    data.channel = this.channel;
                }
                if (this.content != null) {
                    data.content = this.content;
                }
                if (this.timestamp != null) {
                    data.timestamp = this.timestamp;
                }
                if (this.provider != null) {
                    data.provider = this.provider;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.id.length)
                    writer.writeString(1, this.id);
                if (this.user.length)
                    writer.writeString(2, this.user);
                if (this.channel.length)
                    writer.writeString(3, this.channel);
                if (this.content.length)
                    writer.writeString(4, this.content);
                if (this.timestamp != 0)
                    writer.writeInt64(5, this.timestamp);
                if (this.provider.length)
                    writer.writeString(6, this.provider);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Message();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.id = reader.readString();
                            break;
                        case 2:
                            message.user = reader.readString();
                            break;
                        case 3:
                            message.channel = reader.readString();
                            break;
                        case 4:
                            message.content = reader.readString();
                            break;
                        case 5:
                            message.timestamp = reader.readInt64();
                            break;
                        case 6:
                            message.provider = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Message.deserialize(bytes);
            }
        }
        _Message_one_of_decls = new WeakMap();
        CommunicatorModel.Message = Message;
        class SendMessage extends pb_1.Message {
            constructor(data) {
                super();
                _SendMessage_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SendMessage_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("channel" in data && data.channel != undefined) {
                        this.channel = data.channel;
                    }
                    if ("content" in data && data.content != undefined) {
                        this.content = data.content;
                    }
                    if ("provider" in data && data.provider != undefined) {
                        this.provider = data.provider;
                    }
                    if ("integrationID" in data && data.integrationID != undefined) {
                        this.integrationID = data.integrationID;
                    }
                }
            }
            get channel() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set channel(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get content() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set content(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get provider() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set provider(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get integrationID() {
                return pb_1.Message.getFieldWithDefault(this, 4, 0);
            }
            set integrationID(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new SendMessage({});
                if (data.channel != null) {
                    message.channel = data.channel;
                }
                if (data.content != null) {
                    message.content = data.content;
                }
                if (data.provider != null) {
                    message.provider = data.provider;
                }
                if (data.integrationID != null) {
                    message.integrationID = data.integrationID;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.channel != null) {
                    data.channel = this.channel;
                }
                if (this.content != null) {
                    data.content = this.content;
                }
                if (this.provider != null) {
                    data.provider = this.provider;
                }
                if (this.integrationID != null) {
                    data.integrationID = this.integrationID;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.channel.length)
                    writer.writeString(1, this.channel);
                if (this.content.length)
                    writer.writeString(2, this.content);
                if (this.provider.length)
                    writer.writeString(3, this.provider);
                if (this.integrationID != 0)
                    writer.writeInt64(4, this.integrationID);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SendMessage();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.channel = reader.readString();
                            break;
                        case 2:
                            message.content = reader.readString();
                            break;
                        case 3:
                            message.provider = reader.readString();
                            break;
                        case 4:
                            message.integrationID = reader.readInt64();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return SendMessage.deserialize(bytes);
            }
        }
        _SendMessage_one_of_decls = new WeakMap();
        CommunicatorModel.SendMessage = SendMessage;
    })(CommunicatorModel = vernite.CommunicatorModel || (vernite.CommunicatorModel = {}));
    class Task extends pb_1.Message {
        constructor(data) {
            super();
            _Task_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Task_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("createdAt" in data && data.createdAt != undefined) {
                    this.createdAt = data.createdAt;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("priority" in data && data.priority != undefined) {
                    this.priority = data.priority;
                }
                if ("statusId" in data && data.statusId != undefined) {
                    this.statusId = data.statusId;
                }
                if ("createdBy" in data && data.createdBy != undefined) {
                    this.createdBy = data.createdBy;
                }
                if ("projectId" in data && data.projectId != undefined) {
                    this.projectId = data.projectId;
                }
                if ("action" in data && data.action != undefined) {
                    this.action = data.action;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        }
        set id(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        }
        set name(value) {
            pb_1.Message.setField(this, 2, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        }
        set description(value) {
            pb_1.Message.setField(this, 3, value);
        }
        get createdAt() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0);
        }
        set createdAt(value) {
            pb_1.Message.setField(this, 4, value);
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        }
        set type(value) {
            pb_1.Message.setField(this, 5, value);
        }
        get priority() {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        }
        set priority(value) {
            pb_1.Message.setField(this, 8, value);
        }
        get statusId() {
            return pb_1.Message.getFieldWithDefault(this, 9, 0);
        }
        set statusId(value) {
            pb_1.Message.setField(this, 9, value);
        }
        get createdBy() {
            return pb_1.Message.getFieldWithDefault(this, 13, 0);
        }
        set createdBy(value) {
            pb_1.Message.setField(this, 13, value);
        }
        get projectId() {
            return pb_1.Message.getFieldWithDefault(this, 15, 0);
        }
        set projectId(value) {
            pb_1.Message.setField(this, 15, value);
        }
        get action() {
            return pb_1.Message.getFieldWithDefault(this, 16, BasicAction.ADDED);
        }
        set action(value) {
            pb_1.Message.setField(this, 16, value);
        }
        static fromObject(data) {
            const message = new Task({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.createdAt != null) {
                message.createdAt = data.createdAt;
            }
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.priority != null) {
                message.priority = data.priority;
            }
            if (data.statusId != null) {
                message.statusId = data.statusId;
            }
            if (data.createdBy != null) {
                message.createdBy = data.createdBy;
            }
            if (data.projectId != null) {
                message.projectId = data.projectId;
            }
            if (data.action != null) {
                message.action = data.action;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.createdAt != null) {
                data.createdAt = this.createdAt;
            }
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.priority != null) {
                data.priority = this.priority;
            }
            if (this.statusId != null) {
                data.statusId = this.statusId;
            }
            if (this.createdBy != null) {
                data.createdBy = this.createdBy;
            }
            if (this.projectId != null) {
                data.projectId = this.projectId;
            }
            if (this.action != null) {
                data.action = this.action;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt64(1, this.id);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.description.length)
                writer.writeString(3, this.description);
            if (this.createdAt != 0)
                writer.writeInt64(4, this.createdAt);
            if (this.type != 0)
                writer.writeInt32(5, this.type);
            if (this.priority.length)
                writer.writeString(8, this.priority);
            if (this.statusId != 0)
                writer.writeInt64(9, this.statusId);
            if (this.createdBy != 0)
                writer.writeInt64(13, this.createdBy);
            if (this.projectId != 0)
                writer.writeInt64(15, this.projectId);
            if (this.action != BasicAction.ADDED)
                writer.writeEnum(16, this.action);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Task();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt64();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.description = reader.readString();
                        break;
                    case 4:
                        message.createdAt = reader.readInt64();
                        break;
                    case 5:
                        message.type = reader.readInt32();
                        break;
                    case 8:
                        message.priority = reader.readString();
                        break;
                    case 9:
                        message.statusId = reader.readInt64();
                        break;
                    case 13:
                        message.createdBy = reader.readInt64();
                        break;
                    case 15:
                        message.projectId = reader.readInt64();
                        break;
                    case 16:
                        message.action = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Task.deserialize(bytes);
        }
    }
    _Task_one_of_decls = new WeakMap();
    vernite.Task = Task;
})(vernite || (vernite = {}));
