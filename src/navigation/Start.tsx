import { Link } from 'react-router-dom';

import coin_load from '../img/load_coin.gif'
import { usePropsContext } from '../compontents/StateContext';

const Start = () => {
    const {currentPage} = usePropsContext();

    return (
        <div className="start-page h-screen flex flex-col justify-center items-center bg-custom-background bg-fixed">
            <div className="start-container text-center">
            <img
                src={coin_load}
                alt="Crypto Illustration"
                className="w-80 h-auto opacity-80 mx-auto -mb-16 contrast-200"
                />
                <h1 className="md:text-6xl xs:text-4xl font-bold mb-6 tracking-wide text-white">
                    CryptoCoins
                </h1>
                <p className="md:text-lg xs:text-sm font-light mb-8 text-white">
                    Досліджуйте мир криптовалюти у цьому місті
                </p>
                <Link to={`/coins/${1}`}>
                    <button 
                        className="transition transform hover:scale-105 hover:bg-purple-600 bg-purple-500 text-white px-6 py-3 text-xl font-medium shadow-md"
                    >
                        Перейти далі
                    </button>
                </Link>
                
            </div>
        </div>
    );
};

export default Start;