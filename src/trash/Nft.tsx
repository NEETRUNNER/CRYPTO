import Path from "../compontents/Path";
import { usePropsContext } from "../compontents/StateContext";

import { useEffect, useState } from "react";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useNavigate, useParams, Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Pagination } from "@nextui-org/react"; // Если работаем с nextui библиотекой, то нужно не только установить в проект, но и дополнить tailwind

const Nft = () => {
    const [onPage] = useState<number>(20)
    const {nftPageCount} = useParams<{nftPageCount: string}>();
    console.log(nftPageCount)

    const navigate = useNavigate();

    const {currentPage, nftData, setCurrentPage} = usePropsContext();

    const lastPostIndex = currentPage * onPage;
    const firstPostIndex = lastPostIndex - onPage;
    const currentPages = nftData.slice(firstPostIndex, lastPostIndex);

    const handlePageClick = (page: number) => {
        navigate(`/nft/${page}`)
    }

    useEffect(() => {
        if (nftPageCount) {
            setCurrentPage(Number(nftPageCount))
        }
    }, [nftPageCount, currentPage])

    return (
        <section className="nft bg-custom-background bg-fixed">
            <div className="w-4/6 mx-auto">
                <Path/>
            </div>
            <div className="nft-container md:w-4/6 xs:w-4/5 mx-auto flex flex-wrap justify-center">
            <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className="border-b-1">
                                    <TableCell></TableCell>
                                    <TableCell>Назва</TableCell>
                                    <TableCell className="cursor-pointer">Блокчейн</TableCell>
                                    <TableCell className="cursor-pointer">Ціна</TableCell>
                                    <TableCell className="cursor-pointer">1h (%)</TableCell>
                                    <TableCell className="cursor-pointer">1d (%)</TableCell>
                                    <TableCell className="cursor-pointer">1w (%)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentPages.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                                <img src={item.collection_details.image_url} alt="Иконка монеты" className="w-8 inline-block ml-2" />
                                        </TableCell>
                                        <TableCell>
                                            <h1 className=''>{item.collection_details.name}</h1>
                                        </TableCell>
                                        <TableCell>
                                            {item.collection_details.chains}
                                        </TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>
                                            <Link to={`/coins/${currentPage}/${1}`}>
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
            </div>
            <div className="block mx-auto py-8 text-center w-max">
                    <Pagination
                        total={5}
                        initialPage={1}
                        page={currentPage}
                        onChange={(page) => handlePageClick(page)}
                    />
            </div>
        </section>
    )
}

export default Nft;