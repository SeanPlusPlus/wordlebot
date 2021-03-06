import React, { useState } from 'react'

export const Nav = () => {
  const [ modalStatus, setModalStatus ] = useState('');

  const open = () => {
    setModalStatus('modal-open');
  }
  
  const close = () => {
    setModalStatus('');
  }
 
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">
            <div className="flex">
              WordleBot<span className="ml-2 text-2xl" role="img" aria-label="logo">🤖</span>
            </div>
          </span>
        </div> 
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded h-12 m-1">
              <button className="btn btn-info" onClick={open}>
                <div className="m-auto">
                  About
                </div>
              </button> 
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${modalStatus}`}>
        <div className="modal-box">
          <div className="mb-5 text-4xl font-bold">
            Hello There
            <span className="pl-1 pr-1" role="img" aria-label="wave">👋</span>
          </div>
          <p className="pt-4">
            Thanks for taking the time to check out the WordleBot!
          </p>
          <p className="pt-4">
            Make sure you check out the
            <a href="https://github.com/SeanPlusPlus/wordlebot#how-to"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary pl-1 pr-1" >
                how to
            </a>
            before you play.
          </p>
          <p className="pt-4">
            I&apos;ve been hacking together a little
            <span className="text-2xl pl-1 pr-1" role="img" aria-label="logo">🤖</span>
            that tries to solve the daily 
            <a href="https://www.powerlanguage.co.uk/wordle/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary pl-1 pr-1" >
                wordle
            </a>
            challenge as efficiently as possible.
          </p>
          <p className="pt-4">
            The idea for this project came to me the first time I ever attempted the wordle ... I immediately thought to myself, hey this would be a super fun side project to code a solution for! (I&apos;m kinda always keeping an eye out for these kind of side-hack things to mess around with new tech.) After a few hours of dev, chatting with some good buddies, and a good bit of trial and error, I got this prototype up and running.
          </p>
          <p className="pt-4">
            Hopefully the idea here is pretty straightforward. After you play the daily wordle, head on over here to the bot and see if it does better than you did!
          </p>
          <p className="pt-4">
            The UX here is very much a work in progress, but here is the gist of how to play: click <code>START</code> to randomly generate a word. Then go to the wordle site and enter that word. After wordle displays the status of each character [
            <span className="pl-1 pr-1" role="img" aria-label="green">🟩</span>
            <span className="pl-1 pr-1" role="img" aria-label="yello">🟨</span>
            <span className="pl-1 pr-1" role="img" aria-label="gray">⬜️</span>
            ] click on the corresponding square for the bot. When you are ready for a new word, click <code>NEXT</code>.
          </p>
          <p className="pt-4">
            Lastly, I would mega appreciate any feedback on how I can improve the product as well as if you see any bugs (massive bonus points if you include a screenshot). But for real, ultimately, I just mega appreciate you stopping by and am stoked that you are here checking out the bot!!!
          </p>
          <p className="pt-4">
            <a
              href="https://twitter.com/seanplusplus"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary pl-1"
            >
              @SeanPlusPlus
            </a>
          </p>
          <p className="pt-4">
            <a
              href="https://twitter.com/WordleBot_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary pl-1"
            >
              @WordleBot_xyz
            </a>
          </p>
          <p className="pt-4">
            <a
              href="https://github.com/SeanPlusPlus/wordlebot"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary pl-1"
            >
              WorldeBot Github
            </a>
          </p>
          <div className="modal-action">
            <a  className="btn" onClick={close}>Close</a>
          </div>
        </div>
      </div>
    </>
  )
}