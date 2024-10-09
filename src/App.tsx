import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { MdDelete } from "react-icons/md";


export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <Input 
              placeholder="タスクを追加"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
          />
          {/* <div>{todo}</div> */}
          <Button
               className="w-full mt-2"
               onClick={() => {
                setTodos([...todos, todo]);
                setTodo("")
               }}
           >
            追加
          </Button>
          <ul>
            {todos.map((todo, index) => (
              <li className="bg-white p-2 mt-2 flex">
                <div>・{todo}</div>
                <button 
                    className="ml-2"
                    onClick={() => {
                      setTodos(todos.filter((_, i) => i !== index));
                    }}
                    >
                      <MdDelete color="red" />
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
