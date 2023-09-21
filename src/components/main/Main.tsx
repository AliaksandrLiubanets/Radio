import React from "react";
import s from './Main.module.scss'
import {Header} from './header/Header';
import {Content} from './content/Content';

export const Main = () => {
    return (
        <div className={s.main}>
            <Header />
            <Content />
        </div>
    )

}