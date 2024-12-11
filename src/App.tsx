import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // При публикации не на github использовать BrowseRouter

import './App.css';
import Menu from './compontents/Menu';
import Header from './ui/Header';

import { ContextWrapper, usePropsContext } from './compontents/StateContext';

/* import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router'; */

import { lazy, Suspense, useEffect } from 'react';
import Coin from './img/load_01.gif'

const StartPage = lazy(() => import('./navigation/Start'));
const CoinsPage = lazy(() => import('./navigation/Coins'));
const CoinItemPage = lazy(() => import('./navigation/CoinItem'));
const NftPage = lazy(() => import('./navigation/Nft'));
const ExchangePage = lazy(() => import('./navigation/Exchanges'))

const App = () => {

  return (
    <Suspense fallback={<div className="overlay h-screen w-full flex justify-center items-center flex-col"><img src={Coin} alt="" /></div>}>
      <ContextWrapper>

      <Router>
        <Menu/>
        <Header/>

        <Routes>
          <Route path='/' element={<StartPage/>}></Route>
          <Route path='/coins/:pageCount?' element={<CoinsPage/>}></Route>
          <Route path='/coins/:pageCount/:coinId' element={<CoinItemPage/>}></Route> {/* // Если остается путь по типу /coins или /nft можно добавить после них ?, что сделает их необязательными */}
          
          <Route path='/nft/:nftPageCount?' element={<NftPage/>}></Route>
          <Route path='/exchanges/:exchangePage?' element={<ExchangePage/>}></Route>

        </Routes>

      </Router>
      
      </ContextWrapper>
    </Suspense>
  );
}

export default App;