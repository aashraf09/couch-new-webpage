import React from 'react'
import Image from 'next/image'
import BlueIcon from '@/assets/blue.svg'
import PurpleIcon from '@/assets/purple.svg'
import GreenIcon from '@/assets/green.svg'

const About = () => {
    return (
        <section className="about mt-10 text-center py-14 ">
            <div className='md:w-3/5 m-auto'>
                <h2 className="heading text-4xl xl:text-6xl font-bold mb-10 text-white">
                    About us
                </h2>
                <p className="about-para text-2xl md:text-2xl xl:text-4xl font-bold text-white pt-16 px-6 md:p-14">
                    We're building a <span className='green-span-text'>comprehensive mental health care </span> system
                </p>
            </div>
            <div className="block md:flex w-3/4 m-auto justify-center items-center gap-10 py-10">
                <div className="flex flex-col text-center justify-between items-center py-6 md:py-0">
                    <Image src={PurpleIcon} alt='Who we are' className='md:py-5'></Image>
                    <h2 className="font-bold text-xl md:text-2xl xl:text-4xl text-[#A777ED] mt-7 pb-5">Who are we</h2>
                    <p className="text-base md:text-xl xl:text-2xl text-[#D9D9D9]">Imagine having a companion that wants to support you throughout every step of your mental health journey whenever  you want. We’re  here to be that friend.</p>
                </div>
                <div className="flex flex-col text-center justify-between items-center py-6 md:py-0">
                    <Image src={GreenIcon} alt='Who we are' className='md:py-5'></Image>
                    <h2 className="font-bold text-xl md:text-2xl xl:text-4xl text-[#A2E080] mt-7 pb-5">What we do</h2>
                    <p className="text-base md:text-xl xl:text-2xl text-[#D9D9D9]">By creating a network of professionals and putting together clinically and researched backed tools and resources, we want to support you to get a healthier mind.</p>
                </div>
                <div className="flex flex-col text-center justify-between items-center py-6 md:py-0">
                    <Image src={BlueIcon} alt='Who we are' className='md:py-5'></Image>
                    <h2 className="font-bold text-xl md:text-2xl xl:text-4xl text-[#9199F2] mt-7 pb-5">What we believe</h2>
                    <p className="text-base md:text-xl xl:text-2xl text-[#D9D9D9]">We believe that mental health is very important and everyone, no matter their background deserves access to quality mental health care. </p>
                </div>
            </div>
        </section>
    )
}

export default About