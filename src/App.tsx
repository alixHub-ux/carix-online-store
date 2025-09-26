import React from "react";
import Badge from "./components/ui/Badge"; // importe ton Badge (ajuste le chemin si besoin)

function App() {
  return (
    <div className="p-20">

      <div className=" w-full h-10vh flex gap-50">
        <Badge label="Handcrafted" label2="Excellence" />

      <Badge label="Sustainable" label2="Materials" />

       <Badge label="Timeless Design"/>

      <Badge label="Personal Touch"/>
      </div>


    </div>
  );
}

export default App;
