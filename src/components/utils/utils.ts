import {PlayerPropType} from '../common/player/Player';
import auto from '../../assets/table_icons/radios/avto.svg';
import fm from '../../assets/table_icons/FM.svg';
import finder from '../../assets/table_icons/radios/finder.svg';
import likeFM from '../../assets/table_icons/radios/likeFM.svg';
import nrj from '../../assets/table_icons/radios/nrj.svg';
import nostalgy from '../../assets/table_icons/radios/nostalgy.svg';
import relaxFM from '../../assets/table_icons/radios/relaxFM.svg';
import comedyRadio from '../../assets/table_icons/radios/comedyRadio.svg';
import musRadio from '../../assets/table_icons/radios/musRadio.svg';
import humorFM from '../../assets/table_icons/radios/humorFM.svg';
import mir from '../../assets/table_icons/radios/mir.svg';
import union from '../../assets/table_icons/radios/uniton.svg';
import note from '../../assets/table_icons/Icon_note.svg';
import dynamic from '../../assets/table_icons/Icon_dynamic.svg';


export const playerProp: PlayerPropType = {
    title: 'Taylor Swift—Style',
    indicator: note,
    voice: dynamic,
    allTime: '3:39',
    curTime: '1:13'
}
type RadioPropType = {
    id: number
    icon: string
    name: string
    city: string
    country: string
    type: string
    player: PlayerPropType
}
export const radiosPropArr:RadioPropType[]  = [
    {
        id: 120023,
        icon: auto,
        name: 'Авторадио',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 132432,
        icon: finder,
        name: 'Искатель',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120023,
        icon: likeFM,
        name: 'likeFM',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 1281188,
        icon: nrj,
        name: 'NRJ',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120024,
        icon: nostalgy,
        name: 'Nostalgia',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120027,
        icon: relaxFM,
        name: 'RelaxFM',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120028,
        icon: comedyRadio,
        name: 'Comedy Radio',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120029,
        icon: musRadio,
        name: 'Музрадио',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120031,
        icon: humorFM,
        name: 'ЮморFM',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120032,
        icon: mir,
        name: 'МИР',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
    {
        id: 120078,
        icon: union,
        name: 'ЮНИТОН',
        city: 'Минск',
        country: 'РБ',
        type: fm,
        player: playerProp
    },
]