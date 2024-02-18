import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Singup() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='bg-gray-800'>
          <nav className='relative'>
            <div className='flex py-8 px-4 lg:px-8 justify-between items-center'>
              <a className='text-2xl text-white font-bold' href='#'>
                <img
                  className='h-7'
                  src='images/portfolio-logologo.svg'
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
                <ul className='flex items-center text-white space-x-10'>
                  <li>
                    <a className='text-white font-bold text-lg' href='#'>
                      Product
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
                      Story
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
                      Features
                    </a>
                  </li>
                  <span>
                    <svg
                      width={5}
                      height={5}
                      viewBox='0 0 5 5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    />
                  </span>
                  <li></li>
                </ul>
              </div>
              <div className='hidden lg:block'>
                <a
                  className='inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full'
                  href='#'
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
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
                      Product
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Story
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Contact
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
                    Sign in
                  </a>
                  <a
                    className='block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                    href='#'
                  >
                    Sign up
                  </a>
                </div>
                <p className='mt-6 mb-4 text-lg text-center'>
                  <span>2021 © Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className='relative py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <img
            className='hidden lg:block absolute inset-0 mt-32'
            src='zospace-assets/lines/line-mountain.svg'
            alt=''
          />
          <img
            className='hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32'
            src='zospace-assets/lines/line-right-long.svg'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              <div className='flex flex-wrap items-center -mx-4'>
                <div className='w-full lg:w-1/2 px-4 mb-16 lg:mb-0'>
                  <div className='max-w-md'>
                    <span className='text-lg text-blue-400 font-bold'>
                      Register Account
                    </span>
                    <h2 className='mt-8 mb-12 text-5xl font-bold font-heading text-white'>
                      Start creating a new template by selecting UI components
                    </h2>
                    <p className='text-lg text-gray-200'>
                      <span>The brown fox jumps over</span>
                      <span className='text-white'>the lazy dog.</span>
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 px-4'>
                  <div className='px-6 lg:px-20 py-12 lg:py-24 bg-gray-600 rounded-lg'>
                    <form action='#'>
                      <h3 className='mb-10 text-2xl text-white font-bold font-heading'>
                        Register Account
                      </h3>
                      <div className='flex items-center pl-6 mb-3 bg-white rounded-full'>
                        <span className='inline-block pr-3 py-2 border-r border-gray-50'>
                          <svg
                            className='w-5 h-5'
                            width={20}
                            height={21}
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z'
                              fill='black'
                            />
                            <path
                              d='M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z'
                              fill='black'
                            />
                            <rect
                              x={15}
                              y={15}
                              width={5}
                              height={1}
                              rx='0.5'
                              fill='black'
                            />
                            <rect
                              x={17}
                              y={18}
                              width={5}
                              height={1}
                              rx='0.5'
                              transform='rotate(-90 17 18)'
                              fill='black'
                            />
                          </svg>
                        </span>
                        <input
                          className='w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                          type='email'
                          placeholder='example@shuffle.dev'
                        />
                      </div>
                      <div className='flex items-center pl-6 mb-3 bg-white rounded-full'>
                        <span className='inline-block pr-3 py-2 border-r border-gray-50'>
                          <svg
                            className='w-5 h-5'
                            width={17}
                            height={21}
                            viewBox='0 0 17 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z'
                              fill='black'
                            />
                            <path
                              d='M8.49957 8.93567C7.26775 8.93567 6.26562 9.93779 6.26562 11.1696C6.26562 11.8679 6.60247 12.5283 7.1592 12.9474V14.7439C7.1592 15.4829 7.76062 16.0843 8.49957 16.0843C9.2381 16.0843 9.83994 15.4829 9.83994 14.7439V12.9474C10.3966 12.5278 10.7335 11.8679 10.7335 11.1696C10.7335 9.93779 9.7309 8.93567 8.49957 8.93567ZM9.16793 12.3228C9.03032 12.4023 8.94636 12.5502 8.94636 12.7088V14.7439C8.94636 14.9906 8.74572 15.1907 8.49957 15.1907C8.25342 15.1907 8.05278 14.9906 8.05278 14.7439V12.7088C8.05278 12.5502 7.96833 12.4032 7.83072 12.3228C7.41026 12.078 7.1592 11.6468 7.1592 11.1696C7.1592 10.4307 7.76062 9.82925 8.49957 9.82925C9.2381 9.82925 9.83994 10.4307 9.83994 11.1696C9.83994 11.6468 9.58881 12.078 9.16793 12.3228Z'
                              fill='black'
                            />
                          </svg>
                        </span>
                        <input
                          className='w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                          type='password'
                          placeholder='Password'
                        />
                      </div>
                      <div className='flex items-center pl-6 mb-6 bg-white rounded-full'>
                        <span className='inline-block pr-3 py-2 border-r border-gray-50'>
                          <svg
                            className='w-5 h-5'
                            width={20}
                            height={21}
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14V16.4517C15.2077 18.2573 14.0443 20.125 12.0973 20.125H5.42975C3.56848 20.125 1.87435 18.3741 1.87435 16.4517V10.5H15.6243C15.8547 10.5 16.041 10.3044 16.041 10.0625C16.041 9.82058 15.8547 9.625 15.6243 9.625H15.2077V5.95175C15.2077 2.39183 12.8635 0 9.37435 0H7.70768C4.21855 0 1.87435 2.39183 1.87435 5.95175V9.625H1.45768C1.22728 9.625 1.04102 9.82058 1.04102 10.0625V16.4517C1.04102 18.8322 3.13268 21 5.42975 21H12.0972C14.3089 21 16.0409 19.0023 16.0409 16.4517V14C16.041 13.7581 15.8547 13.5625 15.6243 13.5625ZM2.70768 5.95175C2.70768 2.86783 4.67022 0.875 7.70768 0.875H9.37435C12.4119 0.875 14.3743 2.86783 14.3743 5.95175V9.625H2.70768V5.95175Z'
                              fill='black'
                            />
                            <path
                              d='M18.8815 9.3711C18.7482 9.17377 18.4878 9.12827 18.3003 9.26701L8.58655 16.4919L6.75235 14.5655C6.58942 14.3944 6.32608 14.3944 6.16322 14.5655C6.00028 14.7366 6.00028 15.0131 6.16322 15.1842L8.24655 17.3717C8.32695 17.4561 8.43362 17.4999 8.54115 17.4999C8.62488 17.4999 8.70868 17.4732 8.78282 17.4194L18.7828 9.98185C18.9703 9.84143 19.0141 9.56843 18.8815 9.3711Z'
                              fill='black'
                            />
                          </svg>
                        </span>
                        <input
                          className='w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                          type='password'
                          placeholder='Repeat password'
                        />
                      </div>
                      <div className='inline-flex mb-10'>
                        <input className='mr-4' type='checkbox' />
                        <p className='-mt-2 text-sm text-gray-200'>
                          By singning up, you agree to our{' '}
                          <a className='text-white' href='#'>
                            Terms, Data Policy
                          </a>
                          and{' '}
                          <a className='text-white' href='#'>
                            Cookies.
                          </a>
                        </p>
                      </div>
                      <button className='py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200'>
                        Get started
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

