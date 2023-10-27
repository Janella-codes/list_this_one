'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
    
    const prisma = new PrismaClient();
    const name = formData.get('name');
    
    try { 
      
      await prisma.todo.create({
      data: {
        name: name as string,
      },
    });
  } catch (e) {

  }

    revalidatePath("/todos")
  };