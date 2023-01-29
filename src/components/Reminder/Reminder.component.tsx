import style from './Reminder.module.css';
import { MdCalendarToday } from 'react-icons/md';
import { GrMoreVertical } from 'react-icons/gr';
import { useState } from 'react';

export interface IReminderProps {
    title: string;
    more: string;
    date: string;
}

export function Reminder(props: IReminderProps) {
    const [showOptions, setShowOptions] = useState(false);

    return <>
        <div className={style['reminder-block']}>
            <p className={style.title}>{props.title}</p>
            <p className={style.more}>{props.more}</p>
            <div className={style.date}>
                <div>
                    <MdCalendarToday />
                    <span style={{ 'marginLeft': '10px' }}>{props.date}</span>
                </div>
                <span className={style['option-btn']} onClick={() => setShowOptions(!showOptions)}>
                    <GrMoreVertical />
                    {showOptions && <>
                        <div className={style['option-box']}>
                            <div>Edit</div>
                            <div>Delete</div>
                        </div>
                    </>}
                </span>
            </div>
        </div>
    </>;
}