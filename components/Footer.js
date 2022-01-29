import React from 'react'

export const Footer = () => {
  return (
    <footer className="text-center pt-20 pb-10">
      <div class="divider" />
      <p>
      Built by 
        <a
          href="https://twitter.com/seanplusplus"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary pl-1"
        >
          @SeanPlusPlus
        </a>
      </p>
      <p className="pt-2">
        Follow the bot
        <a
          href="https://twitter.com/WordleBot_xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary pl-1"
        >
          @WordleBot_xyz
        </a>
      </p>
    </footer> 
  )
}