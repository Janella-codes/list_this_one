
import { SideNav } from '@/components/SideNav';
import TodosComponent from '@/components/todo-component';
import prisma from '@/lib/prisma'
import { UserButton } from '@clerk/nextjs';



export default async function TodosPage() {
  'use server'

    const todos = await prisma.todo.findMany();

    const messages = await prisma.message.findMany();
    const datetime = new Date();

    return (
      
        <main className='flex min-h-screen flex-col items-center w-full p-24'>
            <div className="container mx-auto flex items-start">
        <SideNav messages={messages} id={0} createdAt={datetime} /> 

            <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
    <h1 className='text-4xl font-bold'>Todos</h1>
          <TodosComponent todos={todos}/>
      
  </div>
         
        </main>
    );
};
