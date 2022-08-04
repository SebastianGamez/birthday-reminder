// React
import { SetStateAction } from "react";

// Friend interface
export interface IFriend {
    id: number,
    name: string,
    age: number,
    image: string
}

// Interface for the context (Friends Array)
export interface IFriendsContext {
    friends: IFriend[]
}

// Interface fixed to handle the global state of the application
export interface IFriendsContextState {
    friendsContextState: IFriendsContext,
    setFriendsContextState: React.Dispatch<SetStateAction<IFriendsContext>>
}