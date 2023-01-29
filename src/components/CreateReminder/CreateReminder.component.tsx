import { Button } from '../Button/Button.component';
import style from './CreateReminder.module.css';
import { useRouter } from "next/router";

export function CreateReminder() {
    const router = useRouter();

    return (
        <div className={style['create-reminder-block']}>
            <div className={style['title']}>
                <input type="text" name="title" placeholder="Title" />
            </div>
            <div className={style['moreInfo']}>
               <textarea name="moreInfo" placeholder="Additional Information..." maxLength={300} rows={5} onResize={() => false}/>
            </div>
            <div className={style['date']}>
                <input type="datetime-local" name="date" />
            </div>
            <div className={style['btn']}>
                <Button text='Cancel' type='cancel' onClick={()=>{
                    router.push("/");
                }} />
                <Button text='Create' type='create' onClick={()=>{}} />
            </div>
        </div>
    );
}