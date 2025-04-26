import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import moment from "moment";
import useStore from "@/utils/UseStore";
import useEditStore from "@/utils/EditState";
function List({ todo, className }) {
  const { Delete } = useStore();
  const { toggleEdit } = useEditStore();
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const target = moment(`${todo.Date} ${todo.time}`, "YYYY-MM-DD HH:mm");
      const now = moment();
      if (!target.isAfter(now)) {
        setRemainingTime("Expired");
        return;
      }
      const duration = moment.duration(target.diff(now));
      const d = duration.days();
      const h = duration.hours();
      const m = duration.minutes();
      const s = duration.seconds();
      setRemainingTime(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [todo.Date, todo.time]);

  return (
    <div
      className={`shadowBox w-full rounded-2xl m-1 flex justify-between p-3 ${className}`}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-xl">{todo.task}</h1>
        <div className="flex items-center gap-2">
          <CiTimer size={20} />
          <p>
            Remains -{" "}
            <span
              style={{ color: remainingTime === "Expired" ? "red" : "green" }}
            >
              {remainingTime}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-end">
        <FaEdit
          size={20}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => toggleEdit(todo.id)}
        />
        <MdDelete
          size={20}
          className="cursor-pointer text-red-500 hover:text-red-700"
          onClick={() => Delete(todo.id)}
        />
      </div>
    </div>
  );
}

export default List;
