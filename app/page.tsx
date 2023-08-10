"use client"
import React from 'react'
import Image from 'next/image'
import { Parallax } from 'react-parallax'
import liveTherapy from '@/assets/liveTherapy.svg'
import wellnessStore from '@/assets/wellnessStore.svg'
import community from '@/assets/community.svg'
import semiCircles from '@/assets/semiCircles.svg'
import greenEmoji from '@/assets/greenEmoji.svg'
import purpleEmoji from '@/assets/purpleEmoji.svg'
import blueEmoji from '@/assets/blueEmoji.svg'
import gridImg1 from '@/assets/grid-img-1.svg'
import gridImg2 from '@/assets/grid-img-2.svg'
import gridImg3 from '@/assets/grid-img-3.svg'
import gridImg4 from '@/assets/grid-img-4.svg'
import gridImg5 from '@/assets/grid-img-5.svg'
import gridImg6 from '@/assets/grid-img-6.svg'
import gridImg7 from '@/assets/grid-img-7.svg'
import gridImg8 from '@/assets/grid-img-8.svg'
import gridImg9 from '@/assets/grid-img-9.svg'
import gridImg10 from '@/assets/grid-img-10.svg'
import therapy from '@/assets/therapy.svg'
import circle from '@/assets/circle.svg'
import star from '@/assets/star.svg'
import flower from '@/assets/flower.svg'
import heart from '@/assets/heart.svg'
import relaxingBody from '@/assets/relaxing body.svg'
import mobile from '@/assets/mobile.svg'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'



const Page = () => {

  return (
    <main className='page'>
      <Navbar />
      <section className="landing text-center relative">
        <h2 className='text-3xl md:text-6xl font-bold w-3/4 m-auto py-10 md:py-20 text-[#A2E080]'>Experience the power of a healthy mind with our support</h2>
        <p className='text-base md:text-3xl font-bold w-3/4 md:w-1/2 m-auto'>Get mental health support, services and products on your own terms.</p>
        <Image src={semiCircles} alt='' className='semiCircles absolute'></Image>
      </section>

      <section className="features py-[20vh] text-center md:text-left mt-20 relative">
        <div className="flex justify-between items-center">
          <Image src={blueEmoji} alt='emoji' className='emoji emoji1 scaling-animation'></Image>
          <Image src={greenEmoji} alt='emoji' className='emoji emoji2 scaling-animation'></Image>
          <Image src={purpleEmoji} alt='emoji' className='emoji emoji3 scaling-animation'></Image>
        </div>
        <div className="feature flex flex-col md:flex-row gap-10 items-center justify-center py-10 px-10 md:px-20">
          <div className="text md:w-1/3">
            <h2 className='text-3xl py-5 md:text-5xl font-bold text-[#9199F2]'>Live Therapy</h2>
            <p>Anonymous & personalized therapy sessions for when life gets overwhelming.</p>
          </div>
          <div className="img">
            <Image src={liveTherapy} alt='Live therapy' width={400}></Image>
          </div>
        </div>
        <div className="feature flex flex-col md:flex-row gap-10 items-center justify-center px-10 md:px-20">
          <div className="img">
            <Image src={wellnessStore} alt='Wellness Store' width={400}></Image>
          </div>
          <div className="text md:w-1/3 order-first md:order-last">
            <h2 className='text-3xl py-5 md:text-5xl font-bold text-[#9199F2]'>Wellness Store</h2>
            <p>Elevate your body,  mind and soul with our items thats promote holistic well-being. </p>
          </div>
        </div>
        <div className="feature flex flex-col md:flex-row gap-10 items-center justify-center py-10 px-10 md:px-20">
          <div className="text md:w-1/3">
            <h2 className='text-3xl py-5 md:text-5xl font-bold text-[#9199F2]'>Community</h2>
            <p>Anonymous & personalized therapy sessions for when life gets overwhelming.</p>
          </div>
          <div className="img">
            <Image src={community} alt='community' width={400}></Image>
          </div>
        </div>
      </section>
      <section className='creating-community  text-[#212640]'>
        <div className="hidden md:grid creating-community-grid py-16 md:pt-[40vh] md:pb-32 grid-cols-5 gap-5 px-10 md:px-20 bg-white place-items-center">
          <div className="col-span-5 md:col-span-3 row-span-2 p-5 font-bold text-3xl md:text-5xl xl:text-7xl">
            <h2>Creating a global <span className='blue-span-text'>Community</span> of <span className='blue-span-text'>mindful</span> individuals</h2>
          </div>
          <div className='hidden md:block'></div>
          <Image src={gridImg1} alt='grid image'></Image>
          <Image src={gridImg2} alt='grid image'></Image>
          <Image src={gridImg3} alt='grid image'></Image>
          <div className='hidden md:block'></div>
          <div className='hidden md:block'></div>
          <Image src={gridImg4} alt='grid image' className='col-span-2 row-span-2'></Image>
          <Image src={gridImg7} alt='grid image'></Image>
          <Image src={gridImg6} alt='grid image'></Image>
          <Image src={gridImg5} alt='grid image'></Image>
          <Image src={gridImg8} alt='grid image'></Image>
        </div>
        <div className="creating-community-grid flex flex-col text-center md:hidden bg-white">
          <div className="p-5 font-bold py-20 pt-32 text-3xl md:text-5xl xl:text-7xl">
            <h2>Creating a global <span className='blue-span-text'>Community</span> of <span className='blue-span-text'>mindful</span> individuals</h2>
          </div>
          <div className="images pb-20 w-3/4 m-auto gap-5 flex justify-center items-center">
            <div className="grid grid-col-1 gap-5">
              <Image src={gridImg1} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg2} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg3} alt='grid-img' className='grid-img'></Image>
            </div>
            <div className="grid grid-col-1 gap-5">
              <Image src={gridImg4} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg5} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg6} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg7} alt='grid-img' className='grid-img'></Image>
            </div>
            <div className="grid grid-col-1 gap-5">
              <Image src={gridImg8} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg9} alt='grid-img' className='grid-img'></Image>
              <Image src={gridImg10} alt='grid-img' className='grid-img'></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex therapy relative flex-col items-center justify-center pt-10 pb-20">
          <div className="heading mb-16">
            <h2 className='text-3xl md:text-5xl text-center font-bold w-3/4 m-auto py-16 md:py-32 xl:text-7xl'><span className="green-span-text">Therapy </span> at your own <span className="green-span-text">convenience</span></h2>
          </div>
          <div className="absolute therapy-img">
            <Image src={therapy} alt='therapy' className=' w-3/4 m-auto' width={500}></Image>
          </div>
        </div>
      </section>
      <section className="py-16 md:pb-32 md:pt-16 px-10 md:px-20 choose-professionals bg-white">
        <div className="grid grid-cols-6 place-items-center">
          <div><Image className='scaling-animation' src={circle} alt='circle'></Image></div>
          <div className="col-span-4"></div>
          <div><Image className='scaling-animation' src={flower} alt='circle'></Image></div>
          <div className="heading col-span-6 pb-10 mb-16">
            <h2 className='text-3xl md:text-5xl text-[#0F1141] text-center font-bold w-3/4 m-auto'><span className="blue-span-text">Choose professionals </span> according to your <span className="blue-span-text"> preferences and needs</span></h2>
          </div>
          <div><Image className='scaling-animation' src={star} alt='circle'></Image></div>
          <div className="img col-span-4 up-down-animation">
            <Image src={relaxingBody} alt='therapy' width={500}></Image>
          </div>
          <div><Image className='scaling-animation' src={heart} alt='circle'></Image></div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section className="mobile-app">
        <h2 className='text-3xl md:text-5xl xl:text-7xl text-center font-bold text-white w-3/4 py-16 md:py-32 m-auto'>Mobile App coming soon!</h2>
        <Image src={mobile} alt='mobile-bg' className='mobile-app-bg m-auto'></Image>
      </section>
      <Footer />
    </main>
  )
}

export default Page


/*
3. purple man animation
*/