import {FC} from 'react';
import s from './Player.module.scss';
import download from '../../../assets/table_icons/Icon_download.svg'
import dynamic_white from '../../../assets/table_icons/Icon_dynamic_white.svg'
import indicator_white from '../../../assets/table_icons/Icon_indicator_white.svg'

export type PlayerPropType = {
    title: string
    indicator: string
    voice: string
    curTime: string
    allTime: string
}
type PlayerPT = {
    playerProp: PlayerPropType
    isEther?: boolean
}
export const Player: FC<PlayerPT> = ({playerProp, isEther}) => {
    const {title, indicator, voice, curTime, allTime} = playerProp
    const textColor =  isEther ? {'color': 'white'} : {'color': 'black'}
    return (
        <div className={s.player}>
            <div className={s.player_head}>
                <div className={s.flex_wrapper}>
                    <div className={s.player_title}>
                        <span style={textColor}>{title}</span>
                    </div>
                    {
                        isEther ?
                            <div className={s.player_icon_indicator}><img src={indicator_white} alt={'indicator_icon'}/>
                            </div>
                            :
                            <div className={s.player_icon_indicator}><img src={indicator} alt={'indicator_icon'}/></div>
                    }

                </div>
                <div className={s.player_icon_actions}>
                    {
                        isEther ?
                            <>
                                <div className={s.player_icon_download}><img src={download} alt={'download_icon'}/>
                                </div>
                                <div className={s.player_icon_voice}><img src={dynamic_white} alt={'voice_icon'}/></div>
                            </>
                            : <div className={s.player_icon_voice}><img src={voice} alt={'voice_icon'}/></div>
                    }

                </div>
            </div>
            <div className={s.player_process}>
                <div className={s.player_time_current}><span style={textColor}>{curTime}</span></div>
                <div className={s.player_progress}>
                    <input type="range" value={curTime} min={0} max={allTime}/>
                </div>
                <div className={s.player_time_all}><span style={textColor}>{allTime}</span></div>
            </div>
        </div>
    )
}