import React, { useEffect, useState } from "react";
import TodoApp from "./UI_Component/TodoApp";
import ListTask from "./UI_Component/ListTask";
import "./App.css";
function App() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 dark:bg-black  dark:text-white h-screen w-screen overflow-auto p-4">
        <div className="col-span-1 flex justify-center items-center p-2">
          <TodoApp />
        </div>
        <div className="col-span-1 gap-2 flex justify-center items-start">
          <ListTask />
        </div>
      </div>
    </>
  );
}

export default App;
