import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GetCoinsApi, GetExchanges, GetNft, GetPriceCoin } from "../other/GetApi";

interface contextWrapperProps {
    children: ReactNode; // Описываем елементы
}

export interface CoinData {
/*     map(arg0: (item: any) => void): ReactNode; */
    length: number;
    id: string;
    name: string;
    price: number;
    icon: string;
    symbol?: string;
    redditUrl?: string;
    twitterUrl?: string;
    rank: number;

    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;

    explorers: string[];
    websiteUrl: string;
}

export interface NftData {
    relevantUrls: urls[] // Описали обьект в котором лежит строка
    averagePrice: number;
    collection_details: {image_url: string, chains: string[], name: string};
    rank: number;
    bannerImg: string;
}

export type ChartData = [
    number, number
]

export interface ExchangeData {
    country: string;
    id: string;
    image: string;
    name: string;
    url: string;
    trust_score_rank: number;
}

interface urls {
    name: string;
    url: string;
}

interface PropsType {
    data: CoinData[]; // Когда ты объединяешь типы, TypeScript требует, чтобы ты проверял, какой именно тип используется в данный момент.
    setData: React.Dispatch<React.SetStateAction <CoinData[]>>; // React.Dispatch - указывает на то что эта функция изменения состояния
    // React.SetStateAction<CoinData[]>: Тип принимаемого значения. Она может быть: новым значением (CoinData[]) — новый массив данных.Функцией — которая принимает текущее состояние и возвращает новое.

    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction <boolean>>;

    coinInfo: CoinData | undefined; // Проблема в том что из-за того что я меняю стейт для coinInfo и для setCoinInfo для правильной работы currentItem, то тут появляются ошибки
    setCoinInfo: React.Dispatch<React.SetStateAction <CoinData | undefined>>; // Типы должны совпадать при использовании разных стейтов, иначе будет ошибка

    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;

    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

    chart: ChartData[];
    setChart: React.Dispatch<React.SetStateAction<ChartData[]>>;

    dataPrice: number | undefined;
    setDataPrice: React.Dispatch<React.SetStateAction<number | undefined>>

    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;

    nftData: NftData[];
    setNftData: React.Dispatch<React.SetStateAction<NftData[]>>;

    filteredData: CoinData[];
    setFilteredData: React.Dispatch<React.SetStateAction<CoinData[]>>;

    exchangeData: ExchangeData[];
    setExchangeData: React.Dispatch<React.SetStateAction<ExchangeData[]>>;

    onPage: number;

    onFilter: boolean;
    setOnFilter: React.Dispatch<React.SetStateAction<boolean>>;

    btc: number | null;
    setBtc: React.Dispatch<React.SetStateAction<number | null>>;

    eth: number | null;
    setEth: React.Dispatch<React.SetStateAction<number | null>>;

    bnb: number | null;
    setBnb: React.Dispatch<React.SetStateAction<number | null>>;

    GetPriceCoin(coin: string): Promise<number>;
}

const PropsContext = createContext({} as PropsType); // {} as PropsType утверждает, что контекст всегда будет содержать объект, соответствующий PropsType. Это убирает необходимость проверки на null в usePropsContext.

export const usePropsContext = () => useContext(PropsContext);

export const ContextWrapper = ({ children }: contextWrapperProps) => { // провайдер вашего контекста
  
    // Создаём начальный стейт для элементов
    const [onPage] = useState<number>(50);
    const [onFilter, setOnFilter] = useState<boolean>(false)

    const [data, setData] = useState<CoinData[]>([]);
    const [chart, setChart] = useState<ChartData[]>([]);
    const [coinInfo, setCoinInfo] = useState<CoinData | undefined>();
    const [nftData, setNftData] = useState<NftData[]>([]);
    const [exchangeData, setExchangeData] = useState<ExchangeData[]>([])

    const [filteredData, setFilteredData] = useState<CoinData[]>([]);

    const [openMenu, setOpenMenu] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1)

    const [dataPrice, setDataPrice] = useState<number | undefined>()

    const [openModal, setOpenModal] = useState<boolean>(false);

    const [btc, setBtc] = useState<number | null>(0)
    const [eth, setEth] = useState<number | null>(0)
    const [bnb, setBnb] = useState<number | null>(0)

    useEffect(() => { // Данные про монеты
        GetCoinsApi()
        .then(data => {
            setLoading(true)
            setData(data);
        })
        .catch(Error => {
            setLoading(true)
            console.log(Error)
            throw new Error
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    useEffect(() => { // Получение nft карточек
        GetNft()
        .then(data => {
            setLoading(true);
            setNftData(data);
            console.log(data);
        })
        .catch((error) => {
            setLoading(true);
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    useEffect(() => { // Получение лучших бирж
        GetExchanges()
        .then(data => {
            setLoading(true);
            setExchangeData(data);
            console.log(data);
        })
        .catch((error) => {
            setLoading(true);
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    useEffect(() => { // Получения актуальной цены монеты
        const interval = setInterval(() => {
            Promise.all([GetPriceCoin('btc').catch(() => null), GetPriceCoin('eth').catch(() => null), GetPriceCoin('bnb').catch(() => null)]).then(data => {
                setBtc(data[0]);
                setEth(data[1]);
                setBnb(data[2]);
            });
        }, 10000);

        return () => clearInterval(interval)
    }, []) // Пустой массив зависимостей будет постоянно обновлятся при любом рендере

    return (
        <PropsContext.Provider 
        value={{data, setData, openMenu, setOpenMenu, coinInfo, setCoinInfo, loading, setLoading, currentPage, setCurrentPage, chart, setChart, dataPrice, setDataPrice, openModal, setOpenModal, nftData, setNftData, GetPriceCoin, filteredData, setFilteredData, exchangeData, setExchangeData, onFilter, setOnFilter, onPage, btc, setBtc, eth, setEth, bnb, setBnb}}
        >
            {children}
        </PropsContext.Provider>
    );
};