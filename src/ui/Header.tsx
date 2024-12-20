import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

import { usePropsContext } from '../compontents/StateContext';

import CoinsPrice from '../compontents/CoinsPrice';
import SearchCoins from '../compontents/SearchCoins';

const Header = () => {

    const {setOpenMenu, openMenu} = usePropsContext()

    return (
        <header className="header bg-gradient-to-br from-gray-900 to-black">
            <div className="header-container md:w-2/3 xs:w-full flex md:justify-between xs:justify-around items-center h-full min-h-20 mx-auto">
            <Link to='/'>
                <img src={logo} alt="" className="header-logo z-40" />
            </Link>

            <CoinsPrice className={('flex-nowrap md:flex xs:hidden')}/>
            
            <SearchCoins/>

                <button onClick={() => setOpenMenu(!openMenu)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex z-40 items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
            </div>
        </header>
    )
}

export default Header;