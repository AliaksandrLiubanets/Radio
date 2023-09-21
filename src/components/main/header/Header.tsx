import s from './Header.module.scss'
import user from '../../../assets/user_panel/Icon_user.svg'
import bell from '../../../assets/user_panel/Icon_bell.svg'
import arrow from '../../../assets/user_panel/Icon_arrow.svg'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_title}>Мониторинг</div>
            <div className={s.header_right_block}>
                <div className={s.user_panel}>
                    <div className={s.user_icon}>
                        <img src={user} alt="user_icon"/>
                    </div>
                    <div className={s.user_name}>User</div>
                    <div className={s.bell}>
                        <img src={bell} alt="bell"/>
                    </div>
                </div>
                <div className={s.arrow_icon}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
        </div>
    )
}