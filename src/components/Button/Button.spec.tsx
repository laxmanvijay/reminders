import { render } from "@testing-library/react";
import { Button } from "./Button.component";

describe("Button", () => {
    it("Should render cancel", () => {
        render(<Button type={"cancel"} text={""}/>)
    });

    it("Should render create", () => {
        render(<Button type={"create"} text={""}/>)
    });

    it("Should render with text", () => {
        const btn = render(<Button type={"create"} text={"hello"}/>);

        expect(btn.baseElement.innerHTML).toContain("hello");
    });
});