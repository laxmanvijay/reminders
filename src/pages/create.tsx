import { CreateReminder } from "@/components/CreateReminder/CreateReminder.component";
import { TopBar } from "@/components/TopBar/TopBar.component";
import style from '../styles/Create.module.css';

export default function Create() {
    return (
        <>
        <TopBar />
        <div className={style.create}>
            <CreateReminder />
        </div>
        </>
    );
};