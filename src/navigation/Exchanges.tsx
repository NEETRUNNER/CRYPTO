import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useNavigate, useParams } from "react-router-dom";
import { usePropsContext } from '../compontents/StateContext';

import Path from '../compontents/Path';

import { Pagination } from "@nextui-org/react";
import { useEffect } from 'react';

const Exchanges = () => {
    const { exchangeData, currentPage, setCurrentPage, onPage } = usePropsContext();

    const navigate = useNavigate();
    const {exchangePage} = useParams<{ exchangePage: string }>(); // Если не деструктуризировать useParams, то мы получали бы обьект, и использовали exchangePage.exchangePage , а если деструктуризировать, то число, или прямо содержимое
    console.log(currentPage)
    
    const lastPostIndex = currentPage * onPage; // 50
    const firstPostIndex = lastPostIndex - onPage; // 0
    const currentPages = exchangeData.slice(firstPostIndex, lastPostIndex); // 0, 50

    const handlePageClick = (page: number) => {
        navigate(`/exchanges/${page}`);
    };

    useEffect(() => {
        if (exchangePage) {
            setCurrentPage(Number(exchangePage))
        }
    }, [exchangePage , currentPage])

    return (
        <section className="main bg-custom-background bg-fixed min-h-screen">
            <div className="main-container md:w-4/6 xs:w-11/12 py-4 mx-auto flex md:justify-center xs:justify-center flex-col min-h-screen items-center">
                <Path className='w-full' />
                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className="border-b-1">
                                    <TableCell className="cursor-pointer">Рейтинг</TableCell>
                                    <TableCell>Біржа</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentPages.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        className='hover:bg-gray-50 dark:hover:bg-gray-600'
                                    >
                                        <TableCell>{item.trust_score_rank}</TableCell>
                                        <TableCell>
                                            <div className='flex items-center'>
                                                <img src={item.image} alt="" className="w-8 rounded-full" /><div className='ml-2 font-semibold'>{item.name}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>
                                            <a href={item.url} target='_blank'>
                                                <button className="relative inline-flex text-xs items-center bg-indigo-50 justify-start px-3 py-1.5 overflow-hidden font-bold group w-max">
                                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-indigo-600 opacity-[3%]"></span>
                                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-600 opacity-100 group-hover:-translate-x-8"></span>
                                                    <span className="relative w-full md:text-sm xs:text-xs font-normal text-left text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">
                                                        Перейти до біржи
                                                    </span>
                                                    <span className="absolute inset-0 border-2 border-white"></span>
                                                </button>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                
                <div className="block mx-auto py-8 text-center w-max">
                    <Pagination
                        color='secondary'
                        total={2}
                        initialPage={currentPage}
                        page={currentPage}
                        onChange={(page) => handlePageClick(page)}
                    />
                </div>
            </div>
        </section>
    )
}

export default Exchanges;