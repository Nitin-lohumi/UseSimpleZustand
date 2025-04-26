import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStore from "@/utils/UseStore";
import useEditStore from "@/utils/EditState";

function FillTodo({ setData, data, isEdit }) {
  const { Add, Edit } = useStore();
  const {clearEdit, editList } = useEditStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    Add({ ...data, id: Date.now() });
    setData({ task: "", Date: "", time: "", id: "" });
  };

  const handleUpdate = () => {
    Edit(editList?.id, data);
    clearEdit();
    setData({ task: "", Date: "", time: "", id: "" });
  };

  const handleCancel = () => {
    clearEdit();
    setData({ task: "", Date: "", time: "", id: "" });
  };
  return (
    <>
      <Card className="w-full h-fit max-h-full max-w-[600px] rounded-xl shadow-md overflow-y-auto">
        <CardHeader>
          <CardTitle className="text-center">TODO APP</CardTitle>
          <CardDescription className="text-center p-1">
            Add Your Daily Routine Tasks
          </CardDescription>
          <hr className="mx-1" />
        </CardHeader>

        <CardContent>
          <div className="p-1">
            <Label htmlFor="taskName" className="pb-2">
              Task Name
            </Label>
            <Input
              id="taskName"
              name="task"
              value={data.task}
              onChange={handleChange}
              className="bg-gray-950 border-none focus:outline-none focus:ring-0 focus-visible:ring-1 shadow-sm shadow-amber-100"
              placeholder="Enter your task"
            />
          </div>

          <div className="p-1">
            <Label htmlFor="taskDate" className="pt-3 pb-2">
              Task Will Be Completed On?
            </Label>
            <Input
              id="taskDate"
              type="date"
              name="Date"
              value={data.Date}
              onChange={handleChange}
              className="bg-gray-950 border-none focus:outline-none focus:ring-0 focus-visible:ring-1 shadow-sm shadow-amber-100"
              placeholder="Select a date"
            />
          </div>

          <div className="p-1">
            <Label htmlFor="taskTime" className="pt-3 pb-2">
              On Time?
            </Label>
            <Input
              id="taskTime"
              type="time"
              name="time"
              value={data.time}
              onChange={handleChange}
              className="bg-gray-950 border-none focus:outline-none focus:ring-0 focus-visible:ring-1 shadow-sm shadow-amber-100"
              placeholder="Select time"
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          {!isEdit ? (
            <Button
              className="bg-blue-600 p-2 m-1 shadow-lg shadow-gray-800 cursor-pointer"
              onClick={handleAdd}
            >
              Add Task
            </Button>
          ) : (
            <div className="flex justify-between w-full">
              <Button
                className="bg-yellow-600 p-2 m-1 shadow-lg shadow-gray-800 cursor-pointer"
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                className="bg-yellow-600 p-2 m-1 shadow-lg shadow-gray-800 cursor-pointer"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default FillTodo;
