import { render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("<Button />", (): void => {
    
    test("There's testing the right component rendering", (): void => {

        const btn: JSX.Element = <Button
                                        handleClick={ (): void => {jest.fn()} } 
                                        labelText="test" 
                                        value="I'm the test button" 
                                    />

        // eslint-disable-next-line testing-library/no-render-in-setup
        render(btn);

        expect(screen.getByLabelText("test").textContent).toContain("I'm the test button");

    });

});