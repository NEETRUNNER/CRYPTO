import Path from "../compontents/Path";
import { usePropsContext } from "../compontents/StateContext";

import { useEffect, useState } from "react";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useNavigate, useParams } from "react-router-dom";

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
                {currentPages.map((item, index) => {
                    return <div key={index}
                        className="nft-wrap m-4 w-72 max-w-64 min-h-64 flex flex-col justify-center items-center p-4 bg-gray-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={item.collection_details.image_url} alt={item.collection_details.name} className="nft-img w-32 h-32 object-cover rounded-full shadow-md border-2 border-gray-700"/>
                        {/* Разделительная линия */}
                        <div className="line h-[1px] w-full bg-gradient-to-r from-indigo-500 to-pink-500 my-4"></div>
                        <h1 className="nft-title text-white font-semibold text-center text-sm">
                            {item.collection_details.name}
                        </h1>
                        <div className="line h-[1px] w-full bg-gradient-to-r from-indigo-500 to-pink-500 my-4"></div>
                        <p className="nft-text uppercase text-white font-semibold text-center text-sm">{item.collection_details.chains}</p>
                    </div>
                })}
            </div>
            <div className="block mx-auto py-8 text-center w-max">
                    <Pagination
                        color='secondary'
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