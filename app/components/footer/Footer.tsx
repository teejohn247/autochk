import React from 'react'
import Link from 'next/link'
import getCarBrands from '@/app/libs/getCarBrands';
import { ImLocation2 } from 'react-icons/im'
import { AiFillPhone, AiOutlineGooglePlus } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { Input, Button } from "@nextui-org/react";

const Footer = async () => {
  const carBrands = await getCarBrands();

  return (
    <div className='footer flex gap-2 px-20'>

      <div className="ft-col">
        <div className="list-hdr">Car Brands</div>
        <div className="list">
          {carBrands && carBrands['makeList'].slice(0, 8).map((brand: any) => (
            <Link href='#' key={brand.name}>{brand.name}</Link>
          ))}
        </div>
      </div>

      <div className="ft-col">
        <div className="list-hdr">Quick Links</div>
        <div className="list">
          <Link href='#'>About Us</Link>
          <Link href='#'>Contact Us</Link>
          <Link href='#'>Get Help</Link>
          <Link href='#'>FAQ</Link>
          <Link href='#'>Terms of use</Link>
          <Link href='#'>Privacy Policy</Link>
        </div>
      </div>

      <div className="ft-col">
        <div className="list-hdr">Get in Touch</div>
        <Link className='flex gap-1 align-items-center mb-2' href='#'>
          <ImLocation2/>
          <span>123 Sebastian, USA</span>
        </Link>

        <Link className='flex gap-1 align-items-center mb-2' href='#'>
          <AiFillPhone/>
          <span>+222 11 4444</span>
        </Link>

        <Link className='flex gap-1 align-items-center' href='#'>
          <HiMail/>
          <span>contact@autochek.com</span>
        </Link>

        <div className="list-hdr mt-4">Follow Us</div>
        <div className="socials flex gap-3">
          <Link className='facebook' href='#'>
            <FaFacebookF/>
          </Link>
          <Link className='twitter' href='#'>
            <BsTwitter/>
          </Link>
          <Link className='google' href='#'>
            <AiOutlineGooglePlus/>
          </Link>
        </div>
      </div>

      <div className="ft-col">
        <div className="list-hdr">Newsletter</div>
        <p>Free Delivery on your first order!</p>
        <div className="subscribe flex gap-2">
          <Input className='rounded-none max-w-xs' radius='sm' variant='faded' type="text" placeholder="Email" />
          <Button size="md" className='rounded'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Footer