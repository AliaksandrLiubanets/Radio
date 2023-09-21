import s from './RadioBlock.module.scss';
import {RadioHeader} from './radioHeader/RadioHeader';
import {Table} from './table/Table';

export const RadioBlock = () => {
    return (
        <div className={s.radio_block}>
            <RadioHeader/>
            <Table />
        </div>
    )
}