import React from 'react'
import Head from 'next/head'

export const Header = () => {
  return (
    <Head>
      <title>Wordle Bot</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="description" content="WordleBot" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}