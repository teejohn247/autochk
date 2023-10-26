'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div>
        <Carousel>
            <CarouselItem>
                <Image
                    src="/banner2.png"
                    alt= ''
                    className='object-cover'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '55vh' }} // optional
                />
                <Carousel.Caption>
                    <div className="caption-cont">
                        <div className='main'>Drive Now, Pay Later</div>
                        <div className='minor'>Finance a brand new car today, and enjoy splendid benefits for years to come.</div>
                    </div>
                    <Button size="md" className='rounded banner-btn'>Shop Now</Button>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <Image
                    src="/banner1.jpg"
                    alt= ''
                    className='object-cover'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '55vh' }} // optional
                />
                <Carousel.Caption>
                    <div className="caption-cont">
                        <div className='main'>Find your dream car here.</div>
                        <div className='minor'>Transform your driving experience with the newest vehicles.</div>
                    </div>
                    <Button size="md" className='rounded banner-btn'>Shop Now</Button>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    </div>
    
  )
}

export default Banner