import style from './Chip.module.css';

export interface IChipProps {
    status: string;
    count: number;
    isSelected: boolean;
    onClicked: Function;
}

export function Chip({ status, count, isSelected, onClicked }: IChipProps) {

    if (status == "") {
        status = "todo"
    }

    return (
        <div className={`${style['chip-block']} ${isSelected && style['chip-selected']}`} data-testid="chip" onClick={() => onClicked()}>
            <span>{status[0].toUpperCase() + status.slice(1)}</span>
            <div className={`${style['number']} ${style['number-'+status.toLowerCase()]}`}>{count}</div>
        </div>
    );
}