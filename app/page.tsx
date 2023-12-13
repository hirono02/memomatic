'use client';
import { useState } from 'react';

import "../app/css/home.css";


export default function Home() {
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setWordCount(e.target.value.length);
  }

  return (
    <>
      <div className="grid place-content-center pt-3">
        <textarea
          className="border p-2 rounded-xl textareas"
          name="message"
          placeholder="Enter content"
          rows={10}
          cols={90}
          value={message}
          onChange={updateMessage}
        />
        <div className="flex justify-between pt-2">
          <button className=" bg-slate-400 hover:bg-slate-500 rounded-md p-1">
            <p className='m-1 text-sm'>Generate</p>
          </button>
          <p className="text-xs text-gray-400">{wordCount}/1000 characters</p>
        </div>
      </div>
    </>
  );
}
