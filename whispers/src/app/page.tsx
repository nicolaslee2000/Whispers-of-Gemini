"use client"

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from 'react';


export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event : any) => {
    setInputValue(event.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{inputValue}</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className={styles.grid}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button1 <span>-&gt;</span>
          </h2>
          <p>func1()</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button2 <span>-&gt;</span>
          </h2>
          <p>func2()</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button3 <span>-&gt;</span>
          </h2>
          <p>func3()</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Button4 <span>-&gt;</span>
          </h2>
          <p>
            func4()
          </p>
        </a>
      </div>
    </main>
  );
}
