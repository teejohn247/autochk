'use client'
import Image from 'next/image'
import getCarDetails from '@/app/libs/getCarDetails';
import getCarMedia from '@/app/libs/getCarMedia';
import React, { Component, useEffect, useState  } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import { AiFillStar, AiOutlineDashboard } from 'react-icons/ai'
import { GrLocation, GrSettingsOption } from 'react-icons/gr'
import { FaCalendarAlt } from 'react-icons/fa'
import { BsFuelPump } from 'react-icons/bs'
import { SiCoronaengine } from 'react-icons/si'

import { Button } from "@nextui-org/react";

interface IParams {
  carId: string
}

const CarDetails = ({params} : {params: IParams}) => {

  const [carDetails, setCarDetails] = useState<any>([]);
  const [carMedia, setCarMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCarDetails(params.carId);
      setCarDetails(response);

      const response2 = await getCarMedia(params.carId);
      setCarMedia(response2.carMediaList);

    };

    fetchData();
  }, []);



  return (
    <div className='car-details-page'>
      <div className="info-hdr">
        <div className="name">{carDetails.carName}</div>
        <div className="extras">
          <div className="rating">
            <AiFillStar/>
            <span>Rating {Math.floor(carDetails?.gradeScore)}</span>
          </div>
        </div>
      </div>

      <div className="car-media">
        <Carousel
          axis="horizontal"
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          renderThumbs={() =>
            carMedia.map((img: any, idx) => (
              img.type === 'image' ?
              <div key={idx} className="w-full h-20 relative">
                <Image
                  src={img.url}
                  className='rounded-md'
                  layout="fill"
                  objectFit="contain"
                  alt="logo"
                ></Image>
              </div>
              : 
              <video key={img.id}>
                <source src={img.url} />
              </video>
            ))
          }
        >
          {carMedia &&
            carMedia.map((img: any, i) => (
              img.type === 'image' ?
              <Image
                key={i}
                src={img.url}
                alt={''}
                className='object-cover rounded-md overflow-hidden'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '55vh' }}
              ></Image>
              : 
              <video key={img.id}>
                <source src={img.url} />
              </video>
            ))}
        </Carousel> 
      </div>

      {carDetails && 
        <div className="car-info">

          <div className="info-wrap">

            <div className="info-hld">
              <Image
                src={carDetails?.model?.make?.imageUrl}
                alt= ''
                width={0}
                height={0}
                className='object-contain'
                style={{ width: '3rem', height: '4rem' }} // optional
              />
              <div className="name">{carDetails.carName}</div>
            </div>
            
            <div className="info-hld">
              <div className="price-tags">
                <div className="cash">₦{carDetails?.marketplacePrice?.toLocaleString('en')}</div>
                <div className="installment">₦{carDetails?.installment?.toLocaleString('en')}/month Installments</div>
              </div>
            </div>

            <div className="info-hld">
              <Button size="md" className='rounded banner-btn'>Buy Now</Button>
            </div>
          </div>

          <div className="info-wrap">

            <div className="info-cont">
              <div className="desc">
                <FaCalendarAlt/>
                <span>Year</span>
              </div>
              <div className="info">{carDetails.year}</div>
            </div>

            <div className="info-cont">
              <div className="desc">
                <GrLocation/>
                <span>Location</span>
              </div>
              <div className="info">{carDetails.city}, {carDetails.state}</div>
            </div>

            <div className="info-cont">
              <div className="desc">
                <AiOutlineDashboard/>
                <span>Mileage</span>
              </div>
              <div className="info">{carDetails.mileage?.toLocaleString('en')} {carDetails.mileageUnit}</div>
            </div>

            <div className="info-cont">
              <div className="desc">
                <GrSettingsOption/>
                <span>Engine Type</span>
              </div>
              <div className="info">{carDetails.engineType}</div>
            </div>

            <div className="info-cont">
              <div className="desc">
                <SiCoronaengine/>
                <span>Transmission</span>
              </div>
              <div className="info">{carDetails.transmission}</div>
            </div>

            <div className="info-cont">
              <div className="desc">
                <BsFuelPump/>
                <span>Fuel Type</span>
              </div>
              <div className="info">{carDetails.fuelType}</div>
            </div>

          </div>

          <div className="info-wrap">

            <div className="header">Car Features</div>

            <div className="table-info">

              <div className="table-hld">
                <div className="desc">Model</div>
                <div className="info">{carDetails?.model?.make?.name}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Series</div>
                <div className="info">{carDetails?.model?.series}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Wheel Type</div>
                <div className="info">{carDetails?.model?.wheelType}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Engine Type</div>
                <div className="info">{carDetails.engineType}</div>
              </div>

              <div className="table-hld">
                <div className="desc">VIN</div>
                <div className="info">{carDetails.vin}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Selling Condition</div>
                <div className="info">{carDetails.sellingCondition}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Exterior Color</div>
                <div className="info">{carDetails.exteriorColor}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Interior Color</div>
                <div className="info">{carDetails.interiorColor}</div>
              </div>

              <div className="table-hld">
                <div className="desc">Warranty</div>
                <div className="info">{carDetails.hasWarranty ? 'Available' : 'Not Available'}</div>
              </div>
            </div>

          </div>
        </div>
      }
    </div>
  )
}

export default CarDetails;