import React, { useState, useEffect } from 'react';
import HeaderSearchInput from './HeaderSearchInput';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

  import HalykLogo from './halyk-logo.png';
export interface HeaderContentProps {
    user: null,
    cityId: number
}

const HeaderContent = (props: HeaderContentProps) => {
    // const router = useRouter();
    const [visible, setVisible] = useState<boolean>(false);
    const [searchBar, setSearchBar] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const handleOnSearch = (_search: string) => {
        const _query = _search ? _search : search;
        if (!searchBar && !_search) setSearchBar(true)
        // else router.push(`/search?query=${encodeURIComponent(_query)}`)
    }

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    const handleAuthModalInvoke = () => setVisible(true);

    const handleSearchClose = () => {
        setSearchBar(false)
        setSearch('')
    }

    useEffect(() => {
        // if (router.pathname === '/search') setSearchBar(true)
        document.addEventListener('authmodal', handleAuthModalInvoke, false)

        return () => document.removeEventListener('authmodal', handleAuthModalInvoke, false)
    }, [])

    return (
        <>
            
            <div className="container">

            <Link href="/">
                    <a className="header-logo">
                        <img 
                            alt="Kino.kz"
                            src={HalykLogo}/>
                    </a>
                </Link>


                <div className="header-btns hide-xs">

                <HeaderSearchInput
                            value={search}
                            onAction={handleOnSearch}
                            onChange={handleSearch}
                            onClose={handleSearchClose}
                            />

                <button className="header-button1" >
                    Филиалы
                </button>
                </div>
            </div>
        </>
    )
}

export default HeaderContent;
