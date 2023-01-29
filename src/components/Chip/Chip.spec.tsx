import { Chip } from "./Chip.component";
import { fireEvent, getByTestId, render } from '@testing-library/react';

describe("Chip", () => {
    it("Should render", () => {
        render(<Chip status={"completed"} count={0} isSelected={false} onClicked={() => {}}/>);
    });
    
    it("Should render", () => {
        render(<Chip status={""} count={0} isSelected={false} onClicked={() => {}}/>);
    });
    
    it("Should render", () => {
        const spy = jest.fn();
        const chip = render(<Chip status={"completed"} count={10} isSelected={false} onClicked={spy}/>);

        fireEvent.click(getByTestId(chip.baseElement, "chip"));

        expect(spy).toHaveBeenCalled();
    });
});