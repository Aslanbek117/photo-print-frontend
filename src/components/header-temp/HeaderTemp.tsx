import React, { useState, useEffect } from 'react';
import HalykLogo from './halyk-logo.png';
import { MainPage } from '../mainPage/MainPage';
import "./Header.css";
export interface HeaderProps {
    user:  null,
    cityId: number
}

const HeaderTemp = (props: HeaderProps) => {
   
    return (
        <div className="header">
            <div className="header-logo">
                <a className="header-logo">
                        <img 
                            alt="Kino.kz"
                            src={HalykLogo}/>
                    </a>
            </div>

            <button className="header-button" >
                    <strong>
                    Филиалы
                    </strong>
             </button>
        </div>
    )
}

export default HeaderTemp;
