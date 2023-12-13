'use client'
import { useMessage } from "@/contexts/messageContext";

export default function TextArea() {
  const { message, setMessage, wordCount, setWordCount } = useMessage();

  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setWordCount(e.target.value.length);
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
        <button className=" bg-slate-400 hover:bg-slate-500 rounded-md p-1">
          <p className="m-1 text-sm">Generate</p>
        </button>
        <p className="text-xs text-gray-400">{wordCount}/1000 characters</p>
      </div>
    </>
  );
}
