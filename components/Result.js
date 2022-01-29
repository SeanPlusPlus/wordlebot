import React, { useContext,  useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Result = () => {
  const {
    words,
    filtered,
    solved,
    setSolved
  } = useContext(GlobalContext);

  useEffect(() => {
    if (words.length) {
      setSolved();
    }
  }, [filtered]);

  return (
    <div className="pt-3 words">
      {solved && (
        <p>
          We got it 
          <span className="pl-1">
            <span role="img" aria-label="party">🎉</span>
          </span>
        </p>
      )}
      {!solved && (
        <>
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
        </>
      )}
    </div>
  )
}