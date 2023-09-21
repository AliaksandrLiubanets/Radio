import radios from '../../../assets/navbar_icons/Icon_all_radio.svg'
import records from '../../../assets/navbar_icons/Icon_ether_record.svg'
import activity from '../../../assets/navbar_icons/Icon_activity_log.svg'
import standards from '../../../assets/navbar_icons/Icon_standards.svg'
import analytics from '../../../assets/navbar_icons/Icon_analytics.svg'
import reports from '../../../assets/navbar_icons/Icon_reports.svg'
import {NavbarItem} from './item/NavbarItem';
import s from './NavbarItems.module.scss'

type ItemType = {
    icon: string
    description: string
    isChosen: boolean
}
const itemsArr: ItemType[] = [
    {icon: radios, description: 'Все радиостанции', isChosen: true},
    {icon: records, description: 'Записи эфиров', isChosen: false},
    {icon: activity, description: 'Журнал действий', isChosen: false},
    {icon: standards, description: 'Эталоны', isChosen: false},
    {icon: analytics, description: 'Аналитика', isChosen: false},
    {icon: reports, description: 'Отчёты', isChosen: false},
]

export const NavbarItems = () => {
    const items = itemsArr.map((i, index) => <NavbarItem key={index}
                                                         icon={i.icon}
                                                         description={i.description}
                                                         isChosen={i.isChosen}
    />)
    return (
        <div className={s.navbarItems}>{items}</div>
    )
}