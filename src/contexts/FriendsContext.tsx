// React
import { createContext } from "react";

// Import interface
import { IFriendsContextState } from "../interfaces/FriendsContextState";

// Create the context
const FriendsContext = createContext<IFriendsContextState>(null!);

// Export context
export default FriendsContext;