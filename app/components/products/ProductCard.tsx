'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BsFuelPump } from 'react-icons/bs'
import { Button } from "@nextui-org/react";

const ProductCard = (props: any) => {
    const router = useRouter()

    return (
        <div 
            onClick={() => router.push(`/car/${props.id}`)}
            className='product-wrap' 
        >
            <div onClick={() => router.push(`/car/${props.id}`)} className="top">
                <Image
                    src={props.imageUrl}
                    alt= ''
                    width={0}
                    height={0}
                    className='object-cover'
                    sizes="100vw"
                    style={{ width: '100%', height: '20vh' }} // optional
                />
                <div className="condition">{props.sellingCondition}</div>
            </div>

            <div onClick={() => router.push(`/car/${props.id}`)} className="bottom">
                <div className="title flex gap-1">
                    <span>{props.year}</span>
                    <span>{props.title}</span>
                </div>
                <div className="main-info">
                    <div className="info">
                        <GrLocation/>
                        <span>{props.city}, {props.state}</span>
                    </div>
                    <div className="info">
                        <AiOutlineDashboard/>
                        <span>{props.mileage.toLocaleString('en')} {props.mileageUnit}</span>
                    </div>
                    <div className="info">
                        <BsFuelPump/>
                        <span className='text-capitalize'>{props.fuelType}</span>
                    </div>
                </div>
                <div className="minor-info">

                </div>

                <div className="price-tags">
                    <div className="cash">₦{props.marketplacePrice.toLocaleString('en')}</div>
                    <div className="installment">₦{props.installment.toLocaleString('en')}/month</div>
                </div>

                <Button size="md" className='w-full rounded banner-btn'>Buy Now</Button>
            </div>
        </div>
    )
}

export default ProductCard