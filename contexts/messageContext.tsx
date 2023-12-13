'use client';
import { createContext, useState, useContext } from "react";

interface MessageContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  wordCount: number;
  setWordCount: React.Dispatch<React.SetStateAction<number>>;
}

const MessageContext = createContext<MessageContextType>({
  message: "",
  setMessage: () => {},
  wordCount: 0,
  setWordCount: () => {},
});

export const useMessage = () => useContext(MessageContext);
interface MessageProviderProps {
  children: React.ReactNode;
}
export const MessageProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);

  return (
    <MessageContext.Provider
      value={{ message, setMessage, wordCount, setWordCount }}
    >
      {children}
    </MessageContext.Provider>
  );
};
