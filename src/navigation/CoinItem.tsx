import { Tab } from '@headlessui/react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import { CoinData, usePropsContext } from "../compontents/StateContext";
import Chart from '../compontents/Chart';

import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { GetCoinChart } from "../other/GetApi";

import Path from '../compontents/Path';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoinModal = () => { 
    const [sizeMobile, setSizeMobile] = useState(window.innerWidth <= 480);
    const [symbolCoin, setSymbolCoin] = useState<string>()

    const { data, coinInfo, setCoinInfo, setLoading, setChart, setDataPrice, dataPrice, GetPriceCoin} = usePropsContext();

    const location = useLocation();
    const { coinId } = useParams<string>();
    console.log(location)
    console.log(coinId)

    const settings = {
        dots: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500
      };

    const handleResize = () => {
        setSizeMobile(window.innerWidth <= 480);
    };
    
    useEffect(() => {
        const getCoin = () => {
            const currentItem = data.find(item => item.id === coinId) as CoinData; // Убираем undefined с помощью утвержденного типа
            console.log(currentItem);
            setCoinInfo(currentItem)
            if (currentItem) {
                const symbol = `${currentItem.symbol}USDT`;
                setSymbolCoin(symbol)
                console.log(symbolCoin?.toLowerCase())
            }

            console.log(coinInfo);
            console.log(coinInfo?.priceChange1h)
        }
        getCoin();
    }, [data, coinInfo, coinId])

    console.log(coinId)

    useEffect(() => {
        setDataPrice(coinInfo?.price)
        console.log('Изменилась страница монеты')
    }, [coinInfo])

    useEffect(() => { // Данные про график
        setChartDay();
    }, [])

    const setChartDay = () => {
        GetCoinChart(coinId, '24h')
            .then(data => {
                setLoading(true)
                console.log(data)
                setChart(data)
            })
            .catch(Error => {
                setLoading(true)
                console.log(Error)
                throw new Error
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const setChartWeek = () => {
        GetCoinChart(coinId, '1w')
            .then(data => {
                setLoading(true)
                console.log(data)
                setChart(data)
            })
            .catch(Error => {
                setLoading(true)
                console.log(Error)
                throw new Error
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const setChartMonth = () => {
        GetCoinChart(coinId, '1m')
            .then(data => {
                setLoading(true)
                console.log(data)
                setChart(data)
            })
            .catch(Error => {
                setLoading(true)
                console.log(Error)
                throw new Error
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const setChartHalfYear = () => {
        GetCoinChart(coinId, '6m')
            .then(data => {
                setLoading(true)
                console.log(data)
                setChart(data)
            })
            .catch(Error => {
                setLoading(true)
                console.log(Error)
                throw new Error
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const setChartYear = () => {
        GetCoinChart(coinId, '1y')
            .then(data => {
                setLoading(true)
                console.log(data)
                setChart(data)
            })
            .catch(Error => {
                setLoading(true)
                console.log(Error)
                throw new Error
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if (!symbolCoin) {
            return;
        }
        GetPriceCoin(symbolCoin)
            .then(avgPrice => {
                console.log(avgPrice)
            })
            .catch(error => {
                console.log(error)
            })
    });

    return (
        <>
        {coinInfo ? (
            <section className="coin bg-gradient-to-br from-gray-900 to-black h-screen">
                    <div className="coin-container md:w-4/6 xs:w-4/5 mx-auto py-8">
                        <Path/>
                            <div className="flex items-center">
                                <img src={coinInfo.icon} alt="" className="md:w-16 xs:w-12 h-auto" />
                                <h3 className="md:text-2xl xs:text-xl font-bold uppercase text-white ml-2">
                                Цена {coinInfo.name} ({coinInfo.symbol})
                                </h3>
                            </div>

                        <div className='flex justify-between flex-wrap items-center'>
                            <div className="flex pt-4">
                                    <h1 className="coin-price text-2xl font-bold uppercase text-white">{dataPrice?.toFixed(2)}</h1> 
                                    <p className="coin-price__changed text-2xl font-bold uppercase text-green-400 ml-2">{Number.isNaN(dataPrice) ? null : coinInfo.priceChange1h}</p>
                            </div>

                            <Popover>
                                <PopoverButton className="relative inline-flex items-center justify-center py-1.5 px-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 shadow-md group xs:mt-4 md:ml-0 xs:ml-2">
                                    <span
                                    className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                    </span>
                                    <span
                                    className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">Посилання</span>
                                    <span className="relative text-base font-semibold invisible">Button Text</span>
                                </PopoverButton >
                                
                                <PopoverPanel
                                    transition
                                    anchor="bottom"
                                    className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                                >
                                    <div className="p-3">
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href={coinInfo.twitterUrl} target='_blank'>
                                        <p className="font-semibold text-white">Twitter</p>
                                    </a>
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href={coinInfo.redditUrl} target='_blank'>
                                        <p className="font-semibold text-white">Reddit</p>
                                    </a>
                                    </div>
                                </PopoverPanel>
                            </Popover>

                        </div>
                        
                        <Tab.Group className='pt-6'>
                        <Tab.List>
                            {sizeMobile ? <Slider {...settings}>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartDay}>День</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartWeek}>Тиждень</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartMonth}>Місяць</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartYear}>Пів року</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartHalfYear}>Рік</Tab>
                            </Slider> 
                            : 
                            <>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartDay}>День</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartWeek}>Тиждень</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartMonth}>Місяць</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartYear}>Пів року</Tab>
                                <Tab className={({selected }) => `coin-btn ${selected ? 'bg-white' : 'bg-slate-500'}`} onClick={setChartHalfYear}>Рік</Tab>
                            </>
                            }
                        </Tab.List>
                         
                        <Tab.Panels className='pt-6'>
                            <Tab.Panel className='w-full'><Chart/></Tab.Panel>
                            <Tab.Panel className='w-full'><Chart/></Tab.Panel>
                            <Tab.Panel className='w-full'><Chart/></Tab.Panel>
                            <Tab.Panel className='w-full'><Chart/></Tab.Panel>
                            <Tab.Panel className='w-full'><Chart/></Tab.Panel> 
                        </Tab.Panels>
                        </Tab.Group>
                    </div>
            </section>
        ) : null}
        </>
    );
}

export default CoinModal;