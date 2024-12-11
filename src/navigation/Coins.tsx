import { useEffect, useState } from "react";
import { usePropsContext } from "../compontents/StateContext";
import Path from '../compontents/Path';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Pagination } from "@nextui-org/react";

const Main = () => {
    const { data, currentPage, setCurrentPage, filteredData, setFilteredData, onPage, onFilter, setOnFilter } = usePropsContext();
    
    const navigate = useNavigate();
    const { pageCount } = useParams<{ pageCount: string }>();

    const lastPostIndex = currentPage * onPage; // 20
    const firstPostIndex = lastPostIndex - onPage; // 0
    const currentPages = data.slice(firstPostIndex, lastPostIndex); // 0, 20

    const handlePageClick = (page: number) => {
        navigate(`/coins/${page}`);
    };
    console.log(currentPage)

    useEffect(() => {
        if (pageCount) {
            setCurrentPage(Number(pageCount));
        }
        setFilteredData(currentPages)
    }, [pageCount, currentPage]);

    const filterByPrice = () => {
        const filteredByPrice = currentPages.sort((a, b) => onFilter ? a.price - b.price : b.price - a.price);
        setFilteredData(filteredByPrice)
        setOnFilter(!onFilter)
    }

    const filterByRank = () => {
        const filteredByRank = currentPages.sort((a, b) => onFilter ? a.rank - b.rank : b.rank - a.rank);
        setFilteredData(filteredByRank)
        setOnFilter(!onFilter)
    }

    const filterByHour = () => {
        const filterByHour = currentPages.sort((a, b) => onFilter ? a.priceChange1h - b.priceChange1h : b.priceChange1h - a.priceChange1h);
        setFilteredData(filterByHour)
        setOnFilter(!onFilter)
    }

    const filterByDay = () => {
        const filterByDay = currentPages.sort((a, b) => onFilter ? a.priceChange1d - b.priceChange1d : b.priceChange1d - a.priceChange1d);
        setFilteredData(filterByDay)
        setOnFilter(!onFilter)
    }

    const filterByWeek = () => {
        const filterByWeek = currentPages.sort((a, b) => onFilter ? a.priceChange1w - b.priceChange1w : b.priceChange1w - a.priceChange1w);
        setFilteredData(filterByWeek)
        setOnFilter(!onFilter)
    }

    const pages = filteredData.length === 0 ? currentPages : filteredData;

    return (
        <section className="main bg-custom-background bg-fixed min-h-screen">
            <div className="main-container md:w-4/6 xs:w-11/12 py-4 mx-auto flex md:justify-center xs:justify-center flex-col min-h-screen items-center">
                <Path className='w-full' />
                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className="border-b-1">
                                    <TableCell className="cursor-pointer" onClick={filterByRank}>#</TableCell>
                                    <TableCell>Монета</TableCell>
                                    <TableCell className="cursor-pointer" onClick={filterByPrice}>Ціна</TableCell>
                                    <TableCell className="cursor-pointer" onClick={filterByHour}>1h (%)</TableCell>
                                    <TableCell className="cursor-pointer" onClick={filterByDay}>1d (%)</TableCell>
                                    <TableCell className="cursor-pointer" onClick={filterByWeek}>1w (%)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pages.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <TableCell>{item.rank}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                <img src={item.icon} alt="Иконка монеты" className="w-8 inline-block ml-2" />
                                                <div className="ml-2 font-bold">{item.name} ({item.symbol})</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{item.price.toFixed(2)} $</TableCell>
                                        <TableCell>{item.priceChange1h}</TableCell>
                                        <TableCell>{item.priceChange1d}</TableCell>
                                        <TableCell>{item.priceChange1w}</TableCell>
                                        <TableCell>
                                            <Link to={`/coins/${currentPage}/${item.id}`}>
                                                <button className="relative inline-flex text-xs items-center bg-indigo-50 justify-start px-3 py-1.5 overflow-hidden font-bold group w-max">
                                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-indigo-600 opacity-[3%]"></span>
                                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-600 opacity-100 group-hover:-translate-x-8"></span>
                                                    <span className="relative w-full md:text-sm xs:text-xs font-normal text-left text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">
                                                        Перейти до монети
                                                    </span>
                                                    <span className="absolute inset-0 border-2 border-white"></span>
                                                </button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                
                <div className="block mx-auto py-8 text-center w-max">
                    <Pagination
                        color='secondary'
                        total={6}
                        initialPage={currentPage}
                        page={currentPage}
                        onChange={(page) => handlePageClick(page)}
                    />
                </div>
            </div>
        </section>
    );
};

export default Main;