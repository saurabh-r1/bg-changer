import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

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
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
          >Red</button>
          <button
          onClick={()=>{setColor("green")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Green" }}
          >Green</button>
          <button
          onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Blue" }}
          >Blue</button>
          <button
          onClick={()=>{setColor("yellow")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Yellow" }}
          >Yellow</button>
          <button
          onClick={()=>{setColor("pink")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Pink" }}
          >Pink</button>
          <button
          onClick={()=>{setColor("orange")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Orange" }}
          >Orange</button>
          <button
          onClick={()=>{setColor("Aqua")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Aqua" }}
          >Aqua</button>
          <button
          onClick={()=>{setColor("khaki")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "khaki" }}
          >Khaki</button>
          <button
          onClick={()=>{setColor("tomato")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "tomato" }}
          >Tomato</button>
          <button
          onClick={()=>{setColor("Lime")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Lime" }}
          >Lime</button>
          <button
          onClick={()=>{setColor("Violet")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Violet" }}
          >Voilet</button>
        </div>
      </div>
    </div>
  );
}

export default App;
