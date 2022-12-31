import { UserModel } from "@models";
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { COLLECTION_USERS, ProviderProps } from "@config";

export const UserContext = React.createContext<UsersState>({} as UsersState);

interface UsersState {
  isLoading: boolean;
  user: UserModel | undefined;
  users: UserModel[];
  updateUserLastActive: any
}

export const UserProvider: React.FunctionComponent<ProviderProps> = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<UserModel | undefined>(undefined);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const userId = "GuFEImgPJTR2XKKq5DKCgOdfLVz2"
    const unsubscibeUser = firestore()
      .collection(COLLECTION_USERS)
      .doc(userId)
      .onSnapshot(querySnapshot => {
        if(querySnapshot.exists) {
          setUser(convertUserModel(querySnapshot.data()))
          setLoading(false)
        }
      })

    const unsubscibeUsers = firestore()
      .collection(COLLECTION_USERS)
      .onSnapshot(querySnapshot => {

        let users: UserModel[] = []
        querySnapshot.docs.forEach((d) => {
          users.push(convertUserModel(d.data()))
        })

        console.log("users", users)
        setUsers(users)
      })

    return () => {
      console.log("unsubscibeUser")
      unsubscibeUser()
      unsubscibeUsers()
    }
  }, []);

  const convertUserModel = (data: any) => {
    return {
      userId: data.userId ?? "",
      username: data.username ?? "",
      lastActiveAt: data.lastActiveAt ?? 0,
      avatar: data.avatar ?? ""
    }
  }

  const updateUserLastActive = (userId: string) => {
    firestore()
      .collection(COLLECTION_USERS)
      .doc(userId)
      .update({"lastActiveAt": new Date().getTime()})
  }

  const state: UsersState = {
    isLoading,
    user,
    users,
    updateUserLastActive
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
