import { useEffect, useState, useCallback } from "react";
import { IMessage } from "react-native-gifted-chat";
import firestore from '@react-native-firebase/firestore';
import { COLLECTION_CHANNELS } from "@config";
import { ChannelModel } from "@models";

const useMessages = (channel_id: string): IMessage[] => {
  const [messages, setMessages] =
    useState<IMessage[]>([]);

  useEffect(() => {
    const unsubscibe = firestore()
        .collection(COLLECTION_CHANNELS)
        .doc(channel_id)
        .onSnapshot(querySnapshot => {
            if(!querySnapshot.exists) {
                setMessages([])
                return
            }

            const channelModel = querySnapshot.data() as ChannelModel
            let messages = channelModel.messages
            messages.forEach((message) => {
                message.createdAt = message.createdAt.toDate()
            })
            setMessages(messages)
        })

    return () => {
      unsubscibe()
    }
  }, []);

  return messages;
};

export default useMessages;
