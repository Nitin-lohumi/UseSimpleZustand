import React, { useState, useEffect } from "react";
import useStore from "@/utils/UseStore";
import FillTodo from "./FillTodo";
import useEditStore from "@/utils/EditState";

function TodoApp() {
  const { editList, isedit } = useEditStore();
  
  const [data, setData] = useState({
    task: "",
    Date: "",
    time: "",
    id: "",
  });

  useEffect(() => {
    if (isedit && editList) {
      setData({
        task: editList.task,
        Date: editList.Date,
        time: editList.time,
        id: editList.id,
      });
    }
  }, [editList, isedit]);

  return (
    <>
      <FillTodo data={data} setData={setData} isEdit={isedit} />
    </>
  );
}

export default TodoApp;
