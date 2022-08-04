// React
import { useContext } from "react";

// Interfaces
import { IFriendsContextState } from "../interfaces/FriendsContextState";

// Context
import FriendsContext from "../contexts/FriendsContext"

// Custom hook
export const useFriendsContext = (): IFriendsContextState => useContext( FriendsContext );