import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import React from 'react'


const createTask = async (formData)=> {
  'use server'
  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content
    }
  })
  revalidatePath('/tasks')
}

const TaskForm = () => {
  return (
    <form action={createTask} >
        <div className='join w-full'>
          <input type='text' className='input input-bordered join-item w-full'placeholder='Type here' name='content' required/>
          <button className='btn btn-primary join-item'>Create Task</button>
        </div>
    </form>
  )
}

export default TaskForm
