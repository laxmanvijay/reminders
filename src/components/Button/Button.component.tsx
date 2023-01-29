import style from './Button.module.css';
import { Ribeye_Marrow } from '@next/font/google';

const rbm = Ribeye_Marrow({ weight: "400", subsets: ['latin'] })

export interface IButtonProps {
    type: 'cancel' | 'create';
    text: string;
    onClick: Function;
}

export function Button({text, type, onClick}: IButtonProps) {
    return (
        <>
            <button className={`${style['btn']} ${style[type]} ${type == 'create' && rbm.className}`} onClick={() => onClick()}>{text}</button>
        </>
    );
}