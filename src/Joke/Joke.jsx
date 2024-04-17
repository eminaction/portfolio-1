"use client";

import "./Joke.css";
import { useState } from "react";
import useSWR from "swr";

export default function Joke() {
  const [joke, setJoke] = useState(false);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    joke ? "https://icanhazdadjoke.com/" : null,
    (url) =>
      fetch(url, {
        headers: {
          Accept: "application/json",
        },
      }).then((res) => res.json())
  );

  // conditionally handling the data error and isLoading
  //   const displayData = (
  //     <>
  //       <div>{error ? <div>Failed to load . . .</div> : null}</div>
  //       <div>{isLoading ? <div>Loading . . .</div> : null}</div>
  //       <div>
  //         {data ? (
  //           <div className="display-joke">
  //             <p id="joke-text">{`"${data.joke}"`}</p>
  //           </div>
  //         ) : null}
  //       </div>
  //     </>
  //   );

  return (
    <>
      <div className="joke-section">
        <div className="buttons">
          <button
            onClick={() => {
              // Toggle the state of joke
              setJoke(!joke);
            }}
          >
            Tell me a <br /> Joke
          </button>

          <a
            href="https://www.linkedin.com/in/emma-nolan-010995179"
            target="_blank"
          >
            <button>I&apos;m Feeling Lucky</button>
          </a>
        </div>

        <div className="joke-container">
          {error && <div className="failed-load">Failed to load...</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {data && (
            <div className="display-joke">
              <p id="joke-text">{`"${data.joke}"`} 🤣</p>
            </div>
          )}
        </div>
      </div>
      {/* <div className="jokes">{joke && displayData}</div> */}
    </>
  );
}
