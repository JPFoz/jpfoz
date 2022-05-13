
import React, { useEffect, useState } from 'react';
import moment from 'moment';

type TerminalConfig = {
  text: string,
  speed: number
}

export default function Terminal({ text, speed }: TerminalConfig){
  const [index, setIndex] = useState(0)
  const [terminalText, setTerminalText] = useState(text[0])

  const now = moment().format('LLL');
  
  useEffect(() => {
    // Set interval to individually add characters
    const key = setInterval(() => {
      setIndex((index) => {
        if (index >= text.length) {
          // Stop the interval when the text reaches the end
          clearInterval(key);
          return index;
        }
        // Progress the string
        return index + 1;
      });
    }, speed);
  }, []);
  
  // Set the text based on the index
  useEffect(() => {
    setTerminalText(text.slice(0, index)) 
  }, [index])

  return (
    <div className="terminal-container">
      <div className=' text-slate-500 text-sm'> Last login: {now} on ttys000</div>
      <div className='text-xlg text-slate-400 terminal-item pr-5'>> </div>
      <div className='terminal-text text-cyan-700 terminal-item'>{terminalText}</div>
      <div className='terminal-cursor terminal-item' id='tc'>&#95;</div>
    </div>
  )
}