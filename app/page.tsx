
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
      
      <div className='container mx-auto flex'>
    <nav className="sticky top-0 px-2 py-4">
          <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
         <li>
         <span className="flex items-center gap-4">

            <UserButton afterSignOutUrl="/" />
            </span>
          </li>
          <li>
         <span className="flex items-center gap-4">
         <span className="text-lg md:inline">todos
         <TodosComponent todos={todos}/>
        </span>
        </span> 
          </li>
         </ul>
          </nav>
        <div className="min-h-screen flex-grow border-x">
          <nav className="sticky top-0 px-2 py-4">
            <ul className="flex flex-col items-start gap-4 whitespace-nowrap">
              <li>
                <span className="flex items-right gap-4">
                <span className="text-lg md:inline">
                  <h1 className='text-4xl font-bold gap-8'>twit</h1>
                    <SideNav messages={messages} id={0} createdAt={datetime} /> 
                </span>
                </span>
              </li>
            </ul>
          </nav>
      </div>
</div> 


    );
};



