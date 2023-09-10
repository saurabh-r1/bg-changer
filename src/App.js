import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* {<script src="https://cdn.tailwindcss.com"></script>} */}
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-2">
        <div
          className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
          >Red</button>
          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Green" }}
          >Green</button>
          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Blue" }}
          >Blue</button>
          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Yellow" }}
          >Yellow</button>
          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Pink" }}
          >Pink</button>
          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Orange" }}
          >Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
