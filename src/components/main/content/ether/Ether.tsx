import s from './Ether.module.scss'
import {Select} from '../../../common/select/Select';
import {useState} from 'react';
import {playerProp, radiosPropArr} from '../../../utils/utils';
import {Player} from '../../../common/player/Player';
import auto from '../../../../assets/table_icons/radios/avto.svg'
import {Song} from '../../../common/currentSong/Song';

const radioArr = radiosPropArr.map(r => r.name)

export const Ether = () => {
    const [radio, setRadio] = useState(radioArr[0])
    return (
        <div className={s.ether_container}>
            <div className={s.title}>
                <span>Эфир</span>
            </div>
            <div className={s.ether_content}>
                <div className={s.drop_down}>
                    <Select options={radioArr} onChangeOption={setRadio}/>
                </div>
                <div className={s.ether}>
                    <div className={s.ether_header}>
                        <div className={s.radio_icon}>
                            <img src={auto} alt={'radio-icon'}/>
                        </div>
                        <div className={s.prayer_block}>
                            <div className={s.in_ether}>
                                <div className={s.circle}> </div>
                                <div className={s.item}><span>В эфире</span></div>
                            </div>
                            <Player playerProp={playerProp} isEther={true}/>
                        </div>
                    </div>

                    <div className={s.ether_grid}>
                        <div className={s.item}><span>Эфирная сетка</span></div>
                        <div className={s.music_list}>
                            <Song />
                            <Song />
                            <Song />
                            <Song />
                            <Song />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.title_notes}>
                <span>Запись</span>
            </div>
            <div className={s.notes}>
                <textarea name="textarea" id="#"> </textarea>
            </div>
        </div>
    )
}