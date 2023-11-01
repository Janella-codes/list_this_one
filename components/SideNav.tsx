'use client'
import React, { experimental_useOptimistic as useOptimistic, useRef } from "react";



import Link from "next/link";
import { send } from "@/actions/action";
import Button from "./button";


type Message = {
    id: number;
    message: string;
    createdAt: Date;
}

type SideNavProps = {
    messages: Message[];
    id: number;
    createdAt: Date;
}
   


export function SideNav({
     messages }: SideNavProps) {
        const ref = useRef<HTMLFormElement>(null);
    const [optimisticMessages, addOptimisticMessage]
     = useOptimistic(messages, (state, newMessage: Message) => {
          return [...state, newMessage];
     });
     

    return (

        <><form ref={ref} action={async formData =>{
            ref.current?.reset();

            addOptimisticMessage({ 
                id: Math.random(),
                message: formData.get('message') as string,
                createdAt: new Date(),
            });

            await send(formData);
        }} className='flex right-5 flex-col w-[400px] m-12'>
                <input 
                  type="text"
                  name="message"
                  className='px-4 py-2 mb-3'
                  placeholder='Message'
                  required 
                />
                
                <Button />
            </form>
            <ul className='flex flex-col items-start gap-6 whitespace-nowrap m-10'>
{optimisticMessages.map((message) => (
    <li key={message.id}>
        <p>{message.message}</p>
        <p>{message.createdAt.toString()}</p>
    </li>
))}

</ul>
</>
    );
}