import s from './Content.module.scss'
import {RadioStations} from './radioStations/RadioStations';
import {Ether} from './ether/Ether';


export const Content = () => {
    return (
        <div className={s.content}>
            <RadioStations />
            <Ether />
        </div>
    )
}