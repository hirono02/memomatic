'use client';
import { useState } from 'react';
import OpenAI from 'openai';
import { config } from 'dotenv';

config();
const openai = new OpenAI( {apiKey: process.env.OPENAI_API_KEY});


import "../app/css/home.css";


export default function Home() {
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setWordCount(e.target.value.length);
  }

  const generateFlashcards = async () => {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a flashcard generator. The user will input text and you are to use that text and context of that text and generate 5 flashcards regarding it in a question, answer format. Give the answers in json format as well.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
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
          <button 
          className=" bg-slate-400 hover:bg-slate-500 rounded-md p-1"
          onClick={generateFlashcards}
          >
            <p className='m-1 text-sm'>Generate</p>
          </button>
          <p className="text-xs text-gray-400">{wordCount}/1000 characters</p>
        </div>
      </div>
    </>
  );
}
