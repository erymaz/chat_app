import { IMessage } from "react-native-gifted-chat"

export interface UserModel {
    userId: string,
    username: string,
    lastActiveAt: number,
    avatar: string
}

export interface ChannelModel {
    channelId: string,
    messages: IMessage[]
}

export interface ConnectModel {
    connectId: string,
    channelId: string,
    users: string[],
    lastMessage?: string,
    lastMessageAt: number
}