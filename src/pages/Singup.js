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
      <div className='mx-auto max-w-[350px] space-y-6 dark:bg-gray-800 rounded-lg shadow-lg p-6 bg-gray-800 w-96'>
        <div className='space-y-2 text-center'>
          <h1 className='text-4xl font-bold text-white'>Welcome Back!</h1>
          <p className='text-white'>Sign in to continue to your account</p>
        </div>
        <div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='flex h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 dark:bg-gray-700 rounded-md'
                id='username'
                required=''
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='flex h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 dark:bg-gray-700 rounded-md'
                id='password'
                required=''
                type='password'
              />
            </div>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md'
              type='submit'
            >
              Sign In
            </button>
          </div>
          <p className='text-white mt-8'>Sign in to continue to your account</p>
          <div
            data-orientation='horizontal'
            role='none'
            className='shrink-0 bg-gray-100 h-[1px] w-full my-8'
          />
          <div className='flex flex-col space-y-4'>
            <button className='p-8 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white rounded-md'>
              Sign in with Google
            </button>
            <button className='p-8 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md'>
              Sign in with Github
            </button>
            <button className='p-8 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full bg-blue-400 hover:bg-blue-500 text-white rounded-md'>
              Sign in with Twitter
            </button>
            <p className='mt-4 text-center text-white'>
              Don't have an account?{' '}
              <a className='text-white-500 hover:text-white' href='#'>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

