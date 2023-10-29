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
        }} className='flex flex-col w-[300px] m-16'>
                <input 
                  type="text"
                  name="message"
                  className='px-4 py-2 mb-3'
                  placeholder='Message'
                  required 
                />
                
                <Button/>
            </form>
            <ul className='list-disc'>
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