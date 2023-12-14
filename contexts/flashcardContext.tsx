'use client';
import { createContext, useState, useContext, SetStateAction } from 'react';

interface FlashcardContextTypes {
    answerCount: number;
    setAnswerCount: React.Dispatch<React.SetStateAction<number>>;
}

interface FlashcardProvider {
    children: React.ReactNode;
}

// Default Vals
const FlashcardContext = createContext<FlashcardContextTypes>({
    answerCount: 0,
    setAnswerCount: () => {},
})

export const useFlashcard = () => useContext(FlashcardContext);

export const FlashcardProvider: React.FC<FlashcardProvider> = ({ children }) => {
    const [answerCount, setAnswerCount] = useState(0);
    return <FlashcardContext.Provider value={answerCount, setAnswerCount}>
        {children}
    </FlashcardContext.Provider>
}


