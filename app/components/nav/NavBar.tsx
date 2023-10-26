"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { FaTruck } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { TbLogout, TbLogin2 } from 'react-icons/tb';
import getCarBrands from '@/app/libs/getCarBrands';
export { Select } from "@nextui-org/select";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";

interface Props {
    children: React.ReactNode
}

const navBar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [carBrands, setCarBrands] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('https://api.staging.myautochek.com/v1/inventory/make?popular=true');
            const carBrands = await response.json();
            setCarBrands(carBrands.makeList);
        };

        fetchData();
    }, []);
    
    return (
        <div className='nav-menu shadow z-0'>
            <div className='nav-top py-2 px-10'>
                <div className="nav-text">Offer Zone Top Deals & Discounts</div>
                <div className="menu-top">
                    <Link href='#'>
                        <FaLocationDot/>
                        <span>Select Location</span>
                    </Link>

                    <Link href='#'>
                        <FaTruck/>
                        <span>Track Order</span>
                    </Link>

                    <Link href='#'>
                        <AiFillPhone/>
                        <span>001 234 5678</span>
                    </Link>

                    <Link href='#'>
                        <TbLogin2/>
                        <span>Log in</span>
                    </Link>

                    <Link href='#'>
                        <TbLogout/>
                        <span>Register</span>
                    </Link>
                </div>
            </div>

            <div className='nav-mid py-4 px-20'>
                <div className="logo w-40">
                    <Image
                        width={160}
                        height={40}
                        className='object-contain relative'
                        src='/autochek-logo.webp'
                        alt='Logo'
                    />
                </div>
                <div className="search-bar flex gap-2">
                    <Input className='rounded-none' radius='sm' variant='faded' type="text" placeholder="Search" />
                    <Button size="md" className='rounded'>Search</Button>
                </div>
                <div className="cart">
                    <Link href='#'>
                        <BsFillCartCheckFill/>
                    </Link>
                </div>
            </div>

            <div className='nav-btm py-3 px-20 bg-slate-100'>
                <div className="categories">
                    <Select
                        size='sm' 
                        radius='sm'
                        variant='faded'
                        label="All Car Brands" 
                        className="max-w-xs" 
                    >
                        {carBrands && carBrands.map((brand: any) => (
                            <SelectItem key={brand.name} value={brand.name}>
                            {brand.name}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="menu">
                    <Link href='#'>Home</Link>
                    <Link href='#'>Car Brands</Link>
                    <Link href='#'>About Us</Link>
                    <Link href='#'>New Arrivals</Link>
                    <Link href='#'>Buy Car</Link>
                    <Link href='#'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default navBar