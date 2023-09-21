import s from './Table.module.scss'
import {TableHeader} from './tableHeadr/TableHeader';
import {Player} from '../../../../../common/player/Player';
import dot from '../../../../../../assets/table_icons/Icon_dot.svg'
import {playerProp, radiosPropArr} from '../../../../../utils/utils';


export const Table = () => {

    return (
        <div className={s.table_wrapper}>
            <table className={s.table}>
                <TableHeader/>
                <tbody>
                {
                    radiosPropArr.map((item => <tr key={item.id}>
                        <td>
                            <div className={s.item_circle}> </div>
                        </td>
                        <td><img src={item.icon} alt={'radio-icon'}/></td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                        <td><img src={item.type} alt={'radio-type-icon'}/></td>
                        <td>
                            <div className={s.item_circle}> </div>
                        </td>
                        <td><Player playerProp={playerProp}/></td>
                        <td><img src={dot} alt={'dot_icon'}/></td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
    )
}
