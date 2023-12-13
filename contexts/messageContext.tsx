import { createContext, useState, useContext } from 'react';

interface MessageContextType {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const MessageContext = createContext<MessageContextType>({
    message: '',
    setMessage: () => {},
})

export const useMessage = () => useContext(MessageContext);
interface MessageProviderProps {
    children: React.ReactNode;
}
export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
    const [message, setMessage] = useState("");

    return (
        <MessageContext.Provider value={{ message, setMessage}}>
            {children}
        </MessageContext.Provider>
    )
}
