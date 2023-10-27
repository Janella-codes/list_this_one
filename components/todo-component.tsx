"use client"

import { addTodo } from "@/actions/action";
import React, { experimental_useOptimistic as useOptimistic, useRef } from "react";
import Button from "./button";
import prisma from '@/lib/prisma'
import { type } from "os";


type Todo = {
    id: number;
    name: string;
}


type TodosComponentProps = {

    todos: Todo[];
}

export default function TodosComponent({
    todos }: TodosComponentProps) {
        const ref = useRef<HTMLFormElement>(null);
        const [optimisticTodos, addOptimisticTodo] 
        = useOptimistic(todos, (state, newTodo: Todo) => {
            return [...state, newTodo];
        });

    return (
        <><form ref={ref} action={async formData =>{
            ref.current?.reset();

            addOptimisticTodo({ 
                id: Math.random(),
                name: formData.get('name') as string,
            });
            // input validation here
           await addTodo(formData);
        }} className='flex flex-col w-[300px] m-16'>
                <input 
                  type="text"
                  name="name"
                  className='px-4 py-2 mb-3'
                  placeholder='Todo name'
                  required 
                />
                
                <Button/>
            </form>

<ul className='list-disc'>
{optimisticTodos.map((todo) => (
    <li key={todo.id}>
       
        <p>{todo.name}</p>
    </li>
))}

</ul>
</>
    )
}