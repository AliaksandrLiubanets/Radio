import s from './NavbarItem.module.scss';
import {FC} from 'react';

type NavbarItemPT = {
    icon: string
    description: string
    isChosen: boolean
}
export const NavbarItem: FC<NavbarItemPT> = ({icon, description, isChosen}) => {
    return (
        <div className={s.navbar_item_block}>
            <div className={s.navbar_item_icon}>
                <img src={icon} alt="icon"/>
            </div>
            <div className={s.navbar_item_description}>
                <span>{description}</span>
            </div>
            { isChosen && <div className={s.navbar_triangle}></div> }
        </div>
    )
}