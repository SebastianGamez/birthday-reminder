import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App  from "../App";

describe("<App />", (): void => {

    it("There's taking the App snapshot", (): void => {

        render( <App /> );

        expect(screen.getByRole("main")).toMatchSnapshot();

    });

    it("There's testing the clear all button", (): void => {

        render( <App /> );

        const btn: HTMLButtonElement = screen.getByLabelText("clear");

        userEvent.click( btn );

        expect(screen.getByText("0 birthdays today")).toBeInTheDocument();

    });

});