import React from 'react'

function InfoTwo() {
  return (
    <div className='container mx-auto flex items-center py-16'>
       <div className="w-1/2 px-6">
            <h2 className='text-3xl font-semibold'>Welcome to myshop</h2>
            <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse consequuntur laudantium, ipsum, doloremque ex, nihil alias placeat rem deleniti reprehenderit ullam accusamus dicta sint reiciendis quisquam voluptatum nam blanditiis.</p>
       </div>
       <div className="w-1/2">
            <img src="https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-auto rounded-lg' />
       </div>
    </div>
  )
}

export default InfoTwo
