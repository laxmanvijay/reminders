import { Reminder } from "./Reminder.component";
import { render } from '@testing-library/react';

describe("Reminder", () => {
    it("Should render", () => {
        render(<Reminder title={""} more={""} date={""} />);
    });
});