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
      <div className="grid place-content-center pt-3 justify-items-end">
        <textarea
          className="border p-2 rounded-xl textareas"
          name="message"
          placeholder="Enter content"
          rows={10}
          cols={90}
          value={message}
          onChange={updateMessage}
        />
        <p className='text-xs text-gray-400 pt-1'>{wordCount}/1000 characters</p>
      </div>
    </>
  );
}
