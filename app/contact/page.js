import React from 'react'
import Link from 'next/link'
const ContactPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>Contact Page</h1>
      <Link href={"/"} className='text-2xl'>Home Page</Link>
      <Link href={"/about"} className='text-2xl'>About Page</Link>
    </div>
  )
}

export default ContactPage
