import useStore from "@/utils/UseStore";
import List from "./List";
import React, { useEffect } from "react";
import { animate } from "animejs";

function ListTask() {
  const { lists } = useStore();

  useEffect(() => {
    if (lists.length > 0) {
      animate(".move-last", {
        x: [-300, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutQuint",
      });
    }
  }, [lists]);
  return (
    <div className="w-full border overflow-hidden rounded-xl p-2">
      {lists.length > 0 ? (
        lists.map((v, i) => (
          <List
            className={i === lists.length - 1 ? "move-last" : ""}
            key={v.id}
            todo={v}
          />
        ))
      ) : (
        <div className="text-center p-5 text-gray-500">
          No tasks found. Add some!
        </div>
      )}
    </div>
  );
}

export default ListTask;
