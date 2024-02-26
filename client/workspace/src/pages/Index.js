import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='pb-20 bg-black'>
          <nav className='relative'>
            <div className='flex py-8 px-4 lg:px-8 justify-between items-center bg-transparent sticky rounded-2xl'>
              <a className='text-2xl text-white font-bold' href='#'>
                <img
                  className='h-7'
                  src='zospace-assets/logos/zospace-logo.svg'
                  alt=''
                  width='auto'
                />
              </a>
              <div className='lg:hidden'>
                <button className='p-2 navbar-burger'>
                  <svg
                    className='w-10 h-3'
                    width={39}
                    height={13}
                    viewBox='0 0 39 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width={39} height={2} rx={1} fill='#C4C4C4' />
                    <rect
                      x={19}
                      y={11}
                      width={20}
                      height={2}
                      rx={1}
                      fill='#C4C4C4'
                    />
                  </svg>
                </button>
              </div>
              <div className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <ul className='flex items-center text-white space-x-10 text-center'>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <a className='text-white font-bold text-lg' href='#'>
                      Quizes
                    </a>
                  </li>
                  <span>
                    <svg
                      width={5}
                      height={5}
                      viewBox='0 0 5 5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='2.5' cy='2.5' r='2.5' fill='#726B6B' />
                    </svg>
                  </span>
                  <li>
                    <a className='text-white font-bold text-lg' href='#'>
                      About
                    </a>
                  </li>
                  <span>
                    <svg
                      width={5}
                      height={5}
                      viewBox='0 0 5 5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='2.5' cy='2.5' r='2.5' fill='#726B6B' />
                    </svg>
                  </span>
                  <li>
                    <a className='text-white font-bold text-lg' href='#'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className='hidden lg:block'>
                <a
                  className='inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-2xl'
                  href='#'
                >
                  Start here
                </a>
              </div>
            </div>
          </nav>
          <div className='relative container px-4 pt-12 md:pt-20 mx-auto'>
            <div className='flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14'>
              <div className='w-full lg:w-1/2 px-4 mb-16 lg:mb-0'>
                <span className='text-lg font-bold text-blue-400'>
                  Challenge Accepted?
                </span>
                <h2 className='max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading'>
                  Start mastring now and join the elite!
                </h2>
                <p className='mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100'>
                  Pratice the top 100 interview on React, HTML, CSS and
                  Javascript
                </p>
                <a
                  className='inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-2xl'
                  href='#'
                >
                  Boost Your Skills Today
                </a>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <img
                  className='w-full rounded-2xl'
                  src='images/DALL-E-2024-02-14-20-52-00-Design-a-captivating-and-modern-landing-page-banner-that-visually-communicates-the-challenge-of-a-quiz-on-the-top-100-questions-covering-React-JavaSc.webp'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <a
                  className='ml-10 mr-auto text-2xl text-gray-800 font-bold'
                  href='#'
                >
                  <img
                    className='h-7'
                    src='zospace-assets/logos/zospace-dark-logo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Products
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Quizes
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto px-10'>
                <div className='pt-6'>
                  <a
                    className='block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full'
                    href='#'
                  >
                    Start your free trial!
                  </a>
                  <a
                    className='block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                    href='#'
                  >
                    Start here
                  </a>
                </div>
                <p className='mt-6 mb-4 text-lg text-center'>
                  <span>© 2021 Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className='py-20 2xl:py-40 bg-gray-800'>
          <div className='container px-4 mx-auto'>
            <div className='mb-16 md:mb-24 text-center'>
              <h2 className='mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading'>
                Products
              </h2>
              <p className='text-lg text-gray-200'>
                Here some of the product that I am developing
              </p>
            </div>
            <div className='max-w-6xl mx-auto'>
              <div className='lg:pl-24 pt-12 lg:pt-24 pb-14 mb-10 bg-gray-900 rounded-xl border-12 border-gray-700'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full lg:w-7/12 px-4 mb-4 lg:mb-0'>
                    <div className='px-8 lg:pl-0 max-w-xl'>
                      <div className='flex items-center mb-8'>
                        <h2 className='mr-16 text-3xl md:text-4xl font-bold font-heading text-white'>
                          Basic landing page
                        </h2>
                        <span className='hidden lg:inline-block w-full py-px bg-gray-700' />
                      </div>
                      <p className='mb-6 text-lg text-gray-200'>
                        The brown me quam, sagittis porttitor lorem sort lora
                        commodo lorem fringilla nisl.
                      </p>
                      <ul className='flex flex-wrap text-left -mx-4 text-white text-base lg:text-lg'>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span>Complete files</span>
                        </li>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span>100GB cloud storage</span>
                        </li>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span>500 team members</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-full lg:w-5/12 px-4'>
                    <div className='h-full text-center'>
                      <h3 className='mb-3 text-lg font-bold text-blue-500'>
                        20% off for students*
                      </h3>
                      <div className='mb-1 flex justify-center font-bold text-white'>
                        <span className='self-start inline-block mr-1 text-xl'>
                          $
                        </span>
                        <p className='self-end text-5xl'>19.90</p>
                      </div>
                      <p className='mb-10 text-lg text-white'>/Month</p>
                      <a
                        className='px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                        href='#'
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:pl-24 pt-12 lg:pt-24 pb-14 bg-gray-900 rounded-xl border-12 border-gray-700'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full lg:w-7/12 px-4 mb-4 lg:mb-0'>
                    <div className='px-8 lg:pl-0 max-w-xl'>
                      <div className='flex items-center mb-8'>
                        <h2 className='mr-16 text-3xl md:text-4xl font-bold font-heading text-white'>
                          Advanced website
                        </h2>
                        <span className='hidden lg:inline-block w-full py-px bg-gray-700' />
                      </div>
                      <p className='mb-6 text-lg text-gray-200'>
                        The brown me quam, sagittis porttitor lorem sort lora
                        commodo lorem fringilla nisl.
                      </p>
                      <ul className='flex flex-wrap text-left -mx-4 text-white text-base lg:text-lg'>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span className='font-medium'>Complete files</span>
                        </li>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span className='font-medium'>5 team members</span>
                        </li>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span className='font-medium'>
                            10GB cloud storage
                          </span>
                        </li>
                        <li className='w-full lg:w-1/2 px-4 mb-6 flex items-center'>
                          <svg
                            className='w-5 h-4 mr-6'
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                          <span className='font-medium'>Unlimited editors</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-full lg:w-5/12 px-4'>
                    <div className='h-full text-center'>
                      <h3 className='mb-3 text-lg font-bold text-blue-500'>
                        20% off for students*
                      </h3>
                      <div className='mb-1 flex justify-center font-bold text-white'>
                        <span className='self-start inline-block mr-1 text-xl'>
                          $
                        </span>
                        <p className='self-end text-5xl'>35.90</p>
                      </div>
                      <p className='mb-10 text-lg text-white'>/Month</p>
                      <a
                        className='px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                        href='#'
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-20 pb-24 2xl:py-40 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='mb-16 md:mb-24 text-center'>
              <h2 className='mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading'>
                Choose a plan
              </h2>
              <p className='text-lg text-gray-200'>
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap items-center -mx-3'>
                <div className='w-full lg:w-1/3 px-3 mb-8 lg:mb-0'>
                  <div className='px-12 py-16 bg-gray-500 rounded-3xl'>
                    <div className='pb-8 mb-14 border-b border-gray-400'>
                      <div className='flex justify-between items-center px-3'>
                        <h3 className='text-4xl text-white font-bold font-heading'>
                          Free
                        </h3>
                        <p className='text-lg text-white font-bold'>$0,00</p>
                      </div>
                    </div>
                    <ul className='text-lg text-white mb-16'>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Complete files</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>10GB cloud storage</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>5 team members</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <a
                        className='inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white'
                        href='#'
                      >
                        Try free
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-3 mb-8 lg:mb-0'>
                  <div className='px-12 py-16 bg-blue-500 rounded-3xl'>
                    <div className='pb-8 mb-14 border-b border-blueGray-300'>
                      <div className='flex justify-between items-center px-3'>
                        <h3 className='text-4xl text-white font-bold font-heading'>
                          Team
                        </h3>
                        <p className='text-lg text-white font-bold'>$9,99</p>
                      </div>
                    </div>
                    <ul className='text-lg text-white mb-16'>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Complete files</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>100GB cloud storage</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>20 team members</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Unlimited anonymous board editors</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>10GB cloud storage</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <a
                        className='inline-block px-10 py-4 border border-blueGray-300 hover:border-blueGray-100 rounded-full font-bold text-white'
                        href='#'
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-3'>
                  <div className='px-12 py-16 bg-gray-500 rounded-3xl'>
                    <div className='pb-8 mb-14 border-b border-gray-400'>
                      <div className='flex justify-between items-center px-3'>
                        <h3 className='text-4xl text-white font-bold font-heading'>
                          Premium
                        </h3>
                        <p className='text-lg text-white font-bold'>$29,99</p>
                      </div>
                    </div>
                    <ul className='text-lg text-white mb-16'>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Complete files</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>20GB cloud storage</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>200+ team members</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <a
                        className='inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white'
                        href='#'
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <img
            className='hidden lg:block absolute top-0 left-0 -ml-96 -mt-40'
            src='zospace-assets/lines/circle.svg'
            alt=''
          />
          <img
            className='hidden lg:block absolute bottom-0 right-0 -mr-32 -mb-72'
            src='zospace-assets/lines/circle.svg'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div>
              <div className='flex flex-wrap -mx-10'>
                <div className='relative w-full lg:w-1/2 px-10 mb-10 lg:mb-20'>
                  <img
                    className='lg:hidden absolute top-0 right-0 -mt-16'
                    src='zospace-assets/images/stars.svg'
                    alt=''
                  />
                  <div className='px-16 pt-16 pb-24 bg-gray-600 rounded-lg'>
                    <img />
                    <h3 className='mt-12 mb-8 text-4xl font-bold text-white'>
                      React
                    </h3>
                    <p className='text-lg text-gray-200'>
                      The brown me quam, sagittis porttitor lorem vel, commodo
                      fringilla nisl.
                    </p>
                  </div>
                </div>
                <div className='relative w-full lg:w-1/2 px-10 mb-10 lg:mb-20'>
                  <img
                    className='hidden lg:block absolute top-0 right-0 -mt-16'
                    src='zospace-assets/images/stars.svg'
                    alt=''
                  />
                  <div className='px-16 pt-16 pb-24 bg-gray-600 rounded-lg'>
                    <img />
                    <h3
                      className='mt-12 mb-8 text-4xl font-bold text-white'
                      contentEditable='false'
                    >
                      CSS
                    </h3>
                    <p className='text-lg text-gray-200'>
                      It’s over, maecenas tincidunt malesuada dolor sit amet
                      malesuada.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 px-10 mb-10 lg:mb-20'>
                  <div className='px-16 pt-16 pb-24 bg-gray-600 rounded-lg'>
                    <img />
                    <h3 className='mt-12 mb-8 text-4xl font-bold text-white'>
                      HTML
                    </h3>
                    <p className='text-lg text-gray-200'>
                      The time, this accumsan augue, posuere posuere elit lorem.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 px-10'>
                  <div className='px-16 pt-16 pb-24 bg-gray-600 rounded-lg'>
                    <img />
                    <h3 className='mt-12 mb-8 text-4xl font-bold text-white'>
                      Javascript
                    </h3>
                    <p className='text-lg text-gray-200'>
                      Again and again vehicula libero at nibh volutpat lacinia
                      non sed you see.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative pt-20 2xl:pt-40 bg-gray-800'>
          <div className='hidden lg:block absolute top-0 right-0 h-full bg-gray-600 w-1/2 rounded-2xl' />
          <div className='container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              <div className='flex flex-wrap -mx-4'>
                <div className='relative w-full lg:w-1/2 px-4 pb-20 overflow-hidden'>
                  <img
                    className='hidden lg:block absolute bottom-0 right-0 w-full h-screen -mr-20 -mb-52'
                    src='zospace-assets/lines/circle.svg'
                    alt=''
                  />
                  <div className='relative max-w-md'>
                    <div className='pb-16 mb-8 border-b border-gray-400'>
                      <span className='text-lg text-blue-400 font-bold'>
                        Have a question?
                      </span>
                      <h2 className='mt-10 mb-16 text-5xl font-bold font-heading text-white'>
                        Contact with us
                      </h2>
                      <div className='py-6 px-8 mb-4 bg-gray-600 rounded-lg'>
                        <div className='flex items-center'>
                          <span className='flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg'>
                            <svg
                              className='w-4 h-4'
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z'
                                fill='white'
                              />
                            </svg>
                          </span>
                          <p className='text-lg font-bold text-white'>
                            +1 786 314 6121
                          </p>
                        </div>
                      </div>
                      <div className='py-6 px-8 mb-4 bg-gray-600 rounded-lg'>
                        <div className='flex items-center'>
                          <span className='flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg'>
                            <svg
                              className='w-5 h-4'
                              width={21}
                              height={14}
                              viewBox='0 0 21 14'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z'
                                fill='white'
                              />
                            </svg>
                          </span>
                          <p className='text-lg font-bold text-white'>
                            salvacorp@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className='py-6 px-8 mb-4 bg-gray-600 rounded-lg'>
                        <div className='flex items-center'>
                          <span className='flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg'>
                            <svg
                              className='w-5 h-5'
                              width={23}
                              height={23}
                              viewBox='0 0 23 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z'
                                fill='white'
                              />
                              <path
                                d='M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z'
                                fill='white'
                              />
                            </svg>
                          </span>
                          <p className='text-lg font-bold text-white'>
                            Chicago, IL.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='max-w-xs'>
                      <p className='text-gray-400'>
                        for more detail visit my portfolio :
                        tuliosalvatierra.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='relative w-full lg:w-1/2 px-4 pb-20'>
                  <div className='max-w-md lg:ml-20'>
                    <form action='#'>
                      <h3 className='mb-10 text-2xl font-bold text-white'>
                        Send a message!
                      </h3>
                      <input
                        className='mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 focus:outline-none rounded-2xl'
                        type='email'
                        placeholder='example@mail.com'
                        contentEditable='false'
                      />
                      <input
                        className='mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 focus:outline-none rounded-2xl'
                        type='text'
                        placeholder='Subject'
                      />
                      <textarea
                        className='w-full mb-6 px-12 py-4 bg-white font-bold placeholder-gray-900 resize-none focus:outline-none rounded-2xl'
                        name=''
                        id=''
                        cols={30}
                        rows={10}
                        placeholder='Your message'
                        defaultValue={''}
                      />
                      <div className='flex mb-10' />
                      <button className='py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-xl'>
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 2xl:py-40 bg-gray-800'>
          <div className='container mx-auto px-4 mb-12 md:mb-20'>
            {' '}
            <div className='max-w-4xl mx-auto text-center'>
              {' '}
              <a
                className='inline-block mb-20 text-white text-xl font-bold'
                href='#'
              >
                {' '}
                <img
                  className='h-7'
                  src='images/portfolio-logologo.svg'
                  alt=''
                  width='auto'
                />
              </a>{' '}
              <ul className='mb-12 md:mb-20 flex flex-wrap items-center justify-center md:justify-between text-lg space-x-0'>
                <li className='mb-4 md:mb-0'>
                  <a
                    className='font-bold text-white hover:text-gray-100'
                    href='#'
                  >
                    Home
                  </a>
                </li>{' '}
                <li className='mb-4 md:mb-0'>
                  <a
                    className='font-bold text-white hover:text-gray-100'
                    href='#'
                  >
                    Services
                  </a>
                </li>{' '}
                <li className='mb-4 md:mb-0'>
                  <a
                    className='font-bold text-white hover:text-gray-100'
                    href='#'
                  >
                    Packages
                  </a>
                </li>{' '}
                <li className='mb-4 md:mb-0'>
                  <a
                    className='font-bold text-white hover:text-gray-100'
                    href='#'
                  >
                    About
                  </a>
                </li>{' '}
                <li className='mb-4 md:mb-0'>
                  <a
                    className='font-bold text-white hover:text-gray-100'
                    href='#'
                  >
                    Reach Out
                  </a>
                </li>{' '}
              </ul>
              <div className='flex justify-center'>
                {' '}
                <a
                  className='flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full'
                  href='#'
                >
                  {' '}
                  <svg
                    className='h-4 w-4 text-white'
                    width={18}
                    height={18}
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0)'>
                      <path
                        d='M17.0064 3.181e-08H0.992752C0.444397 0.00027469 -0.000137297 0.445084 3.181e-08 0.993576V17.0072C0.00027469 17.5556 0.445084 18.0001 0.993576 18H17.0064C17.5551 18.0001 17.9999 17.5555 18 17.0068C18 17.0067 18 17.0066 18 17.0064V0.992752C17.9997 0.444397 17.5549 -0.000137297 17.0064 3.181e-08Z'
                        fill='white'
                      />
                      <path
                        d='M12.4277 18.0001V11.0391H14.7744L15.126 8.31453H12.4277V6.57924C12.4277 5.79221 12.6462 5.25594 13.7748 5.25594H15.2051V2.82562C14.9562 2.79253 14.1025 2.71851 13.109 2.71851C11.0348 2.71851 9.61523 3.98413 9.61523 6.30939V8.31453H7.27734V11.0391H9.61523V18.0001H12.4277Z'
                        fill='#2D2D33'
                      />
                    </g>
                  </svg>
                </a>{' '}
                <a
                  className='flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full'
                  href='#'
                >
                  {' '}
                  <svg
                    className='h-4 w-4 text-white'
                    width={18}
                    height={18}
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0)'>
                      <path
                        d='M17.982 5.29205C17.9398 4.33564 17.7852 3.67812 17.5636 3.10836C17.3351 2.50359 16.9834 1.96213 16.5227 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03301 0C6.58917 0 6.28328 0.0105764 5.3233 0.0527447C4.36689 0.0949129 3.70937 0.249713 3.13975 0.471131C2.53484 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731078 2.50716 0.505952 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875659 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839947 12.7115C0.126163 13.6679 0.280963 14.3254 0.502518 14.8952C0.731078 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.53841 17.3038 3.13618 17.5288C3.70937 17.7504 4.36332 17.905 5.31986 17.9472C6.27971 17.9895 6.58574 17.9999 9.02957 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0278 11.4456 18.0278 9.00176C18.0278 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3223 13.5202 16.1747 13.9949 16.0516 14.3114C15.7492 15.0956 15.1268 15.7179 14.3426 16.0204C14.0262 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03658 16.3824C6.63491 16.3824 6.3466 16.372 5.40063 16.3297C4.52155 16.2911 4.04685 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39775 15.0568 2.16919 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71565 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71565 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.16919 3.31234 2.39775 2.95727 2.70021 2.66883C2.99196 2.36994 3.34359 2.14138 3.73395 1.99729C4.05042 1.87422 4.52869 1.72656 5.4042 1.68783C6.3536 1.64566 6.63848 1.63508 9.04001 1.63508C11.4453 1.63508 11.73 1.64566 12.676 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.3799 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3223 4.49731 16.3611 5.37295C16.4032 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4032 11.6917 16.3611 12.6411Z'
                        fill='white'
                      />
                      <path
                        d='M9.03411 4.37793C6.48135 4.37793 4.41016 6.44898 4.41016 9.00188C4.41016 11.5548 6.48135 13.6258 9.03411 13.6258C11.587 13.6258 13.6581 11.5548 13.6581 9.00188C13.6581 6.44898 11.587 4.37793 9.03411 4.37793ZM9.03411 12.0013C7.37801 12.0013 6.03467 10.6581 6.03467 9.00188C6.03467 7.34564 7.37801 6.00244 9.03411 6.00244C10.6903 6.00244 12.0335 7.34564 12.0335 9.00188C12.0335 10.6581 10.6903 12.0013 9.03411 12.0013Z'
                        fill='white'
                      />
                      <path
                        d='M14.9208 4.1952C14.9208 4.79133 14.4375 5.27468 13.8412 5.27468C13.2451 5.27468 12.7617 4.79133 12.7617 4.1952C12.7617 3.59894 13.2451 3.11572 13.8412 3.11572C14.4375 3.11572 14.9208 3.59894 14.9208 4.1952Z'
                        fill='white'
                      />
                    </g>
                  </svg>
                </a>{' '}
                <a
                  className='flex justify-center items-center w-12 h-12 bg-gray-600 rounded-full'
                  href='#'
                >
                  {' '}
                  <svg
                    className='w-4 h-4 text-white'
                    width={18}
                    height={16}
                    viewBox='0 0 18 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18 2.41887C17.3306 2.7125 16.6174 2.90712 15.8737 3.00162C16.6388 2.54487 17.2226 1.82712 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95237 8.85938 5.22012C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63637 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50412C3.37612 9.58625 3.04875 9.62562 2.709 9.62562C2.47275 9.62562 2.23425 9.61213 2.01038 9.56262C2.4885 11.024 3.84525 12.0984 5.4585 12.1332C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64862 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16587 18 2.41887Z'
                      fill='white'
                    />
                  </svg>
                </a>{' '}
              </div>{' '}
            </div>
          </div>{' '}
          <p className='text-center text-lg text-white pt-12 px-4 border-t border-gray-500'>
            {' '}
            <span>
              © 2024 <a href='tuliosalvatierra.com'>tuliosalvatierra.com</a>
            </span>{' '}
            <span className='text-gray-300'>All rights reserved.</span>
          </p>
        </section>
      </>
    </React.Fragment>
  );
}

