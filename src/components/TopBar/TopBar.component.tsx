import style from './TopBar.module.css';
import { Ribeye_Marrow } from '@next/font/google';
import Link from 'next/link'

const rbm = Ribeye_Marrow({ weight: "400", subsets: ['latin'] })

export function TopBar() {
    return (
        <div className={style.topbar}>
                <Link className={rbm.className} href="/">Reminders</Link>
        </div>
    )
}