import { render } from "@testing-library/react";
import { TopBar } from "./TopBar.component";

describe("TopBar", () => {
    it("Should render", () => {
        render(<TopBar/>);
    });
});