import { CreateReminder } from "./CreateReminder.component"
import { render } from "@testing-library/react";

describe("CreateReminder", ()=>{
    it("Should render", () => {
        render(<CreateReminder/>);
    });
});