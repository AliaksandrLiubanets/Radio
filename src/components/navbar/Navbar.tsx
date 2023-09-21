import React from "react";
import s from './Navbar.module.scss'
import {NavbarItems} from './navbarItems/NavbarItems';
import {NavbarHeader} from './navbarHeader/NavbarHeader';

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <NavbarHeader />
            <NavbarItems />
        </div>
    )
}