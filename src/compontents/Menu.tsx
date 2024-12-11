import { Link, useLocation } from "react-router-dom";
import { animated, useTransition } from "@react-spring/web";
import { usePropsContext } from "./StateContext";
import { useEffect } from "react";

import CoinsPrice from '../compontents/CoinsPrice';

const Menu = () => {
    const { openMenu, setOpenMenu, currentPage} = usePropsContext();
    const location = useLocation();

    useEffect(() => {
        setOpenMenu(false); // Закрываем меню при смене маршрута
    }, [location, setOpenMenu]);

    const transitions = useTransition(openMenu, { // useTransition можно так же использовать вместе со стейтом
        from: { opacity: 0, transform: 'translateY(-20px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-20px)' },
        config: { duration: 300 },
    });

    return transitions((style, item) => item && ( 
                <animated.div
                    className="menu md:overflow-auto xs:overflow-hidden bg-black fixed z-40 flex justify-center flex-col text-center h-full w-full"
                    style={style}
                >
                    <div className="menu-container">
                        <ul className="menu-ul w-max text-center mx-auto">
                            <Link to="/">
                                <li className="menu-ul__item text-white md:text-2xl xs:text-xl font-light uppercase my-12">
                                    Головна
                                </li>
                            </Link>
                            <Link to={`/coins/${1}`}>
                                <li className="menu-ul__item text-white md:text-2xl xs:text-xl font-light uppercase my-12">
                                    Монети
                                </li>
                            </Link>
                            <Link to={`/nft/${1}`}>
                                <li className="menu-ul__item text-white md:text-2xl xs:text-xl font-light uppercase my-12">
                                    NFT
                                </li>
                            </Link>
                            <Link to={`/exchanges/${1}`}>
                                <li className="menu-ul__item text-white md:text-2xl xs:text-xl font-light uppercase my-12">
                                    Біржи
                                </li>
                            </Link>
                        </ul>

                        <CoinsPrice className={('flex-col justify-center mx-auto w-max md:hidden xs:flex')}/>
                    </div>
                </animated.div>
            )
    );
};

export default Menu;
