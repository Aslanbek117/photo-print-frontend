import React, { useState, useEffect } from 'react';
import HeaderContent from './HeaderContent';
import HalykLogo from './halyk-logo.png';
import { MainPage } from '../mainPage/MainPage';
export interface HeaderProps {
    user:  null,
    cityId: number
}

const Header = (props: HeaderProps) => {
    // const router = useRouter();
    const abortCtrl = typeof(window) !== 'undefined' ? new AbortController() : null;
    const signal = abortCtrl?.signal;
    const [announcement, setAnnouncement] = useState<string>('');
    const [cityId, setCityId] = useState<number>(props.cityId ? props.cityId : 2);


    // All stuff that invokes after the component is mounted
    useEffect(() => {
        // fetchAnnouncement()

        if (props.cityId) setCityId(props.cityId)


        return () => {
            abortCtrl?.abort()
        }
    }, [])

    return (
        <div className="header">


            <HeaderContent
                user={props.user}
                cityId={cityId}
          />

        </div>
    )
}

export default Header;
