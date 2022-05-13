import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import Bookshelf from '../components/bookshelf';

const Books: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-white'>
      <Head>
        <title>James Foster</title>
        <link rel='icon' href='../../public/favicon.ico' />
      </Head>
      <Bookshelf></Bookshelf>

    </div>
  
  )
}

export default Books