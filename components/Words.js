import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Words = () => {
  const {
    words,
    filtered,
  } = useContext(GlobalContext);

  return (
    <div className="pt-3">
      <p>
        <span className="pr-1">
          Possible words:
        </span>
        {words.length > 0 && filtered.length > 0 && (
          <code>{filtered.length}</code>
        )}
        {words.length > 0 && filtered.length === 0 && (
          <>
            <span role="img" aria-label="question">❓</span>
            <span role="img" aria-label="question">❓</span>
          </>
        )}
        {words.length === 0 && (
          <span role="img" aria-label="question">❓</span>
        )}
      </p>
      {(words) && (filtered.length > 0) && (
        <div className="card card-bordered mt-3">
          <div className="card-body">
            <div className="flex flex-wrap max-w-fit">
                {filtered.map((word) => (
                  <div key={word} className="p-1">{word}</div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}