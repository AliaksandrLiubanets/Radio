import s from './NavbarHeader.module.scss'
import bass from '../../../assets/navbar_icons/Icon_bass.svg'

export const NavbarHeader = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.navbar_header}>
                <div className={s.navbar_header_icon}>
                    <img src={bass} alt="icon"/>
                </div>
                <div className={s.navbar_header_description}>
                    <span>bass</span>
                </div>
            </div>
            <div className={s.navbar_line}></div>
        </div>
    )
}