import "../app/css/home.css";

export default function Home() {
  return (
    <>
      <div className="grid place-content-center pt-3">
        <textarea
          className="border p-2 rounded-xl textareas"
          name="message"
          placeholder="Enter content"
          rows={10}
          cols={90}
        />
      </div>
    </>
  );
}
