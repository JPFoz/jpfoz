import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Terminal from '../components/terminal'

type Dir = {
  name: string,
  link: string
}

const Home: NextPage = () => {

  const command: string = 'ls ./james_foster/tech/'

  const dirs: Dir[] = [
    {
      name: 'github',
      link: 'https://github.com/JPFoz'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/james-foster-9b5481114/'
    }
  ]
  
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-black'>
      <Head>
        <title>James Foster</title>
        <link rel='icon' href='../../public/favicon.ico' />
      </Head>

      <main className='items-center justify-center'>
        <Terminal text={command} speed={100} />
        <span className='inline-grid grid-cols-4 gap-1 text-white'>
          { dirs.map((dir) => (
          <span className='fadeInAnimated terminal text-cyan-700 pr-1 pl-1 items-center text-center hover:bg-neutral-300'><a href={dir.link}>{dir.name}</a></span>
          ))}
        </span>
      </main>
    </div>
  )
}

export default Home