'use client'

import React from 'react'
import { createTaskCustom } from '@/utils/actions'
import {useFormStatus} from 'react-dom'

const SubmitBtn = ()=> {
  const {pending} = useFormStatus()
  return (
    <button className='btn btn-primary join-item' disabled={pending}>{pending? 'please wait...': 'Create Task'}</button>
  )
}

const TaskForm = () => {
  return (
    <form action={createTaskCustom} >
        <div className='join w-full'>
          <input type='text' className='input input-bordered join-item w-full'placeholder='Type here' name='content' required/>
          <SubmitBtn/>
        </div>
    </form>
  )
}

export default TaskForm
