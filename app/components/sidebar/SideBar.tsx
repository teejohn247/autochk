'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from "react";
import getCarBrands from '@/app/libs/getCarBrands';
export { Checkbox } from "@nextui-org/checkbox";
import { Input, Button, Checkbox } from "@nextui-org/react";

const SideBar = () => {
    const [carBrands, setCarBrands] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.staging.myautochek.com/v1/inventory/make?popular=true');
            const carBrands = await response.json();
            setCarBrands(carBrands.makeList);
        };

        fetchData();
    }, []);

    return (
        <div className='side-bar-cards shadow z-0 bg-slate-100'>
            <div className="card-hld">
                <div className="header">Search here</div>
                <div className="search-bar flex gap-2">
                    <Input className='rounded-none max-w-xs' radius='sm' variant='faded' type="text" placeholder="Type car name" />
                    <Button size="md" className='rounded'>Search</Button>
                </div>
            </div>

            <div className="card-hld">
                <div className="header">Price Range</div>
                <div className="list">
                    <Link href='#'>Under ₦3,000,000</Link>
                    <Link href='#'>₦3,000,000 - ₦7,000,000</Link>
                    <Link href='#'>₦7,000,000 - ₦15,000,000</Link>
                    <Link href='#'>₦15,000,000 - ₦30,000,000</Link>
                    <Link href='#'>₦30,000,000 - ₦50,000,000</Link>
                    <Link href='#'>Above ₦50,000,000</Link>
                </div>
            </div>

            <div className="card-hld">
                <div className="header">Car Brands</div>
                <div className="list">
                    {carBrands && carBrands.map((brand: any) => (
                        <Checkbox size='sm' radius='sm'>{brand.name}</Checkbox>
                    ))}
                </div>
            </div>

            <div className="card-hld">
                <div className="header">New Arrivals</div>
                <div className="list">
                    <Checkbox size='sm' radius='sm'>Last 30 days</Checkbox>
                    <Checkbox size='sm' radius='sm'>Last 60 days</Checkbox>
                </div>
            </div>
        </div>
    )
}

export default SideBar