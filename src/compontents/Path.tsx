import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import { useState, useEffect } from "react";
import { usePropsContext } from "./StateContext";

import { CoinData } from "./StateContext";

const Path = ({className}: any) => {
    const [pathData, setPathData] = useState<CoinData[]>();

    const {data} = usePropsContext();

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    useEffect(() => {
        const dataForPath = data.map(item => ({...item, id: item.id}));
        setPathData(dataForPath);
    }, []);

    return (
        <nav className={`py-6 aria-label="Breadcrumb ${className}`}>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <li>
            <Link to="/" className="block transition hover:text-gray-700 text-white">
            <span className="sr-only">Home</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
            </Link>
        </li>

        {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const currentItem = pathData ? pathData.find((item) => item.id === value) : null;
            console.log(currentItem)

            return (
            <Fragment key={to}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.247l6-16.5" />
                </svg>
                <li>
                <Link
                    to={to}
                    className="block transition hover:text-gray-700 xs:text-xs md:text-md font-medium whitespace-nowrap truncate max-w-[100px] md:max-w-none text-white uppercase"
                >
                    {currentItem ? currentItem.id : value}
                </Link>
                </li>
            </Fragment>
            );
        })}
        </ol>
    </nav>
    )
}

export default Path;