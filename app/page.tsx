import { config } from 'dotenv';
config();


import "../app/css/home.css";
import TextArea from '@/components/Textarea';

export default function Home() {

  const apiKey = process.env.OPENAI_API_KEY;
 
  return (
    <>
      <div className="grid place-content-center pt-3">
        <TextArea apiKey={apiKey}/>
      </div>
    </>
  );
}
