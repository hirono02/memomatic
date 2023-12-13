"use client";
import { useMessage } from "@/contexts/messageContext";
import OpenAI from "openai";

interface TextAreaProps {
  apiKey: string | undefined;
}

const TextArea: React.FC<TextAreaProps> = ({ apiKey }) => {
  const { message, setMessage, wordCount, setWordCount } = useMessage();

  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setWordCount(e.target.value.length);
  };

  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
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
  };

  return (
    <>
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
          onClick={generateFlashcards}
          className=" bg-slate-400 hover:bg-slate-500 rounded-md p-1"
        >
          <p className="m-1 text-sm">Generate</p>
        </button>
        <p
          className={
            wordCount > 2000 ? "text-xs text-red-400" : "text-xs text-gray-400"
          }
        >
          {wordCount}/2000 characters
        </p>
      </div>
    </>
  );
};

export default TextArea;
