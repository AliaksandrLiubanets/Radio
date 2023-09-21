import s from './TableHeader.module.scss'
import {FC} from 'react';
import antenna from '../../../../../../../assets/table_icons/Icon_antenna.svg'
import mountains from '../../../../../../../assets/table_icons/Icon_mountains.svg'

export const TableHeader = () => {
    return (
            <thead className={s.table_header}>
            <tr>
                <TableTh icon={antenna}/>
                <TableTh icon={mountains}/>
                <TableTh text={'ID'}/>
                <TableTh text={'Название'}/>
                <TableTh text={'Город'}/>
                <TableTh text={'Страна'}/>
                <TableTh text={'Тип'}/>
                <TableTh text={'Запись'}/>
                <TableTh text={'Сейчас в эфире'}/>
                <TableTh text={''}/>
            </tr>
            </thead>
    )
}
type TableThPT = {
    icon?: string
    text?: string
}
export const TableTh:FC<TableThPT> = ({icon, text}) => {
    return (
        <th>
            {icon && <img src={icon} alt={'icon'}/>}
            {text && <span>{text}</span>}
        </th>
    )
}