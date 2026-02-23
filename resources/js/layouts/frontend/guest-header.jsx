import { Link } from '@inertiajs/react'
import React from 'react'

 function GuestHeader({children}) {
  return (
    <main className='bg-gray-100 '>
      <header className='flex justify-between items-center p-4 bg-white shadow-md'>
        <h1 className='text-xl font-bold text-red-500'>My App</h1>
        <nav>
          <Link href="/login" className='text-gray-600 hover:text-gray-800'>Login</Link>
          <Link href="/register" className='ml-4 text-gray-600 hover:text-gray-800'>Register</Link>
        </nav>
      </header>
      <article className='min-h-screen'>
        {children}
      </article>

      <footer className='text-center p-4 bg-gray-200 mt-4'>
        &copy; 2024 My App. All rights reserved.
      </footer>
    </main>
  )
}


export {GuestHeader}
