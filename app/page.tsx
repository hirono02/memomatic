import { useState } from 'react';
import OpenAI from 'openai';
import { config } from 'dotenv';

config();
const openai = new OpenAI( {apiKey: process.env.OPENAI_API_KEY});


import "../app/css/home.css";
import TextArea from '@/components/Textarea';
import { useMessage } from '@/contexts/messageContext';


export default function Home() {
  const { message } = useMessage();
  // const generateFlashcards = async () => {
  //   const completion = await openai.chat.completions.create({
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are a flashcard generator. The user will input text and you are to use that text and context of that text and generate 5 flashcards regarding it in a question, answer format. Give the answers in json format as well.",
  //       },
  //       {
  //         role: "user",
  //         content: message,
  //       },
  //     ],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(completion.choices[0]);
  // }

  return (
    <>
      <div className="grid place-content-center pt-3">
        <TextArea />
      </div>
    </>
  );
}
