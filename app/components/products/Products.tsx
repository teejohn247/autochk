
import React, { useEffect, useState } from 'react'
// import { carList } from '../../../utils/data'
import { PageProps } from '@/app/page';
import ProductCard from './ProductCard';
import Pagination from '../pagination/Pagination';
import { revalidatePath } from 'next/cache';
import SideBar from '../sidebar/SideBar';
import getAllCarListings from '@/app/libs/getAllCarListings';
import { carList } from '@/utils/data';


export type fetchDataType = typeof fetchData;

const PAGE_SIZE = 9;
// let cars: { result: any[]; };

const fetchData = async (take = PAGE_SIZE, skip: number) => {

   
    // const results = cars?.result?.slice(skip, skip + take);
    // const total = cars?.result?.length;

    const results = carList.slice(skip, skip + PAGE_SIZE);
    const total = carList.length;

    revalidatePath('/');

    return {
        data: results,
        metadata: {
            hasNextPage: skip + take < total,
            totalPages: Math.ceil(total / take)
        }
    };
};


// eslint-disable-next-line @next/next/no-async-client-component
const Products = async (props: PageProps) => {

    // cars = await getAllCarListings();
   
    const pageNumber = Number(props?.searchParams?.page || 1);
    const take = PAGE_SIZE;
    const skip = (pageNumber - 1) * take;


    const { data, metadata } = await fetchData(take, skip);

    return (
        <div className='flex align-items-start justify-between px-20 py-12'>
            <div className="carList">
                <div className="header">Popular Car Listings</div>
                <div className="list">
                    {data?.map((item: any, i: any) => (
                        <ProductCard {...item} key={i}/>
                    ))}
                    <Pagination page={''} {...props.searchParams} {...metadata}/>
                </div>
                
            </div>
            
            <SideBar />
        </div>
    )
}

export default Products