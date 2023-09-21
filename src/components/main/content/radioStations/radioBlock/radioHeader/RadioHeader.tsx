import s from './RadioHeader.module.scss';
import {FC} from 'react';

const headItemsArr: HeaderItemPT[] = [
    {text: 'Все', num: 11},
    {text: 'В эфире', num: 11},
    {text: 'Ошибка', num: 0},
    {text: 'Ошибка чтения', num: 0},
    {text: 'Ошибка чтения', num: 0},
]
export const RadioHeader = () => {
    return (
        <div className={s.head_items}>
            {headItemsArr.map((i, ind) => <HeaderItem key={ind} num={i.num} text={i.text}/>)}
        </div>
    )
}

type HeaderItemPT = {
    text: string
    num: number
}
const HeaderItem:FC<HeaderItemPT> = ({text, num}) => {
    return (
        <div className={s.item}>
            <div className={s.item_circle}></div>
            <div className={s.item_title}>{text}</div>
            <div className={s.item_number}>
                <span>{num}</span>
            </div>
        </div>
    )
}