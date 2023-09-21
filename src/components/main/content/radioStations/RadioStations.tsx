import s from './RadioStations.module.scss'
import {RadioBlock} from './radioBlock/RadioBlock';

export const RadioStations = () => {
    return (
        <div className={s.radios}>
            <div className={s.title}>
                <span>Радиостанции</span>
            </div>
            <RadioBlock />
        </div>
    )
}