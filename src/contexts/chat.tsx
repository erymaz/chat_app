import { ConnectModel } from "@models";
import React, { useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { COLLECTION_CONNECTS, COLLECTION_USERS, ProviderProps } from "@config";
import { UserContext } from "./users";

export const ChatContext = React.createContext<ChatState>({} as ChatState);

interface ChatState {
  connects: ConnectModel[]
}

export const ChatProvider: React.FunctionComponent<ProviderProps> = ({ children }: ProviderProps) => {
  const {user} = useContext(UserContext)
  const [connects, setConnects] = useState<ConnectModel[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(isLoading || !user || user.userId.length < 1) {
      return
    }

    console.log("******** chat provider **************")
    setLoading(true)
    const unsubscibeConnects = firestore()
      .collection(COLLECTION_CONNECTS)
      .where("users", 'array-contains', user.userId)
      // .orderBy("lastMessageAt", "desc")
      .onSnapshot(querySnapshot => {
        if(!querySnapshot) {
          setConnects([])
          return
        }

        let connects: ConnectModel[] = []
        querySnapshot.docs.forEach((d) => {
          connects.push(convertConnectModel(d.data()))
        })

        // connects.sort((a, b) => {
        //   return a.lastMessageAt < b.lastMessageAt ? 1 : -1
        // })
        setConnects(connects.sort((a, b) => {
          return a.lastMessageAt < b.lastMessageAt ? 1 : -1
        }))
      })

    return () => {
      unsubscibeConnects()
    }
  }, [user]);

  const convertConnectModel = (data: any) => {
    return {
      connectId: data.connectId ?? "",
      channelId: data.channelId ?? "",
      users: data.users ?? [],
      lastMessage: data.lastMessage,
      lastMessageAt: data.lastMessageAt
    }
  }

  const state: ChatState = {
    connects,
  };

  return <ChatContext.Provider value={state}>{children}</ChatContext.Provider>;
};
