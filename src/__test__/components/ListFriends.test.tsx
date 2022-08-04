import { render, screen } from "@testing-library/react";
import { ListFriends } from "../../components/ListFriends";
import { IFriendsContextState } from "../../interfaces/FriendsContextState"

import * as useFriendsContext from "../../hooks/useFriendsContext";

import friends from "../../data/friends";

describe("<ListFriends />", (): void => {

    test("There's testing the friends rendering", (): void => {
        
        const contextValues: IFriendsContextState = { setFriendsContextState: null!, friendsContextState: friends }

        jest.spyOn(useFriendsContext, "useFriendsContext").mockImplementation((): IFriendsContextState => contextValues);

        render(<ListFriends />);

        expect(screen.getAllByLabelText("friend")).toHaveLength(5);

    });

});