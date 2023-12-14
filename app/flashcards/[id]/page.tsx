export default function Flashcard() {
  const questions: Array<String> = [
    "This is where the flashcards appear",
    "This is second quesiton",
    "This is third quesiton",
    "This is fourth quesiton",
  ];
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between">
          <p>Flashcards</p>
          <button className="bg-slate-400 hover:bg-slate-500 rounded-full p-2 w-1/12">
            Back
          </button>
        </div>
        <div className="grid place-content-center mt-5">
          <div className="border rounded-lg shadow flex items-center">
            <p className="p-6 m-6">This is where the flashcards appear</p>
          </div>
        </div>
      </div>
    </>
  );
}
