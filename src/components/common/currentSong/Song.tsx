import s from './Song.module.scss';
import indicator_white from '../../../assets/table_icons/Icon_indicator_white.svg';

export const Song = () => {
    return (
        <div className={s.music_block}>
            <div className={s.music_part_left}>
                <div className={s.black_circle}> </div>
                <div className={s.black_circle}> </div>
            </div>
            <div className={s.music_part_center}>
                <div className={s.music_wrapper}>
                    <div className={s.music_time}>
                        <div className={s.music_time_start}><span>09:12:02</span></div>
                        <div className={s.music_time_finish}><span>09:15:41</span></div>
                    </div>
                    <div className={s.music_song}>
                        <div className={s.music_picture}>
                            <div className={s.music_text}><span>Музыка</span></div>
                            <div className={s.music_img}><img src={indicator_white} alt={'icon'}/>
                            </div>
                        </div>
                        <div className={s.music_singer}><span>Taylor Swift—Style</span></div>
                    </div>
                </div>
                <div className={s.music_all_time}><span>... 3:39</span></div>
            </div>
            <div className={s.music_part_right}> </div>
        </div>
    )
}