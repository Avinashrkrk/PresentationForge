import { Loader2 } from 'lucide-react'
import React from 'react'

function Authloading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
        <Loader2 className='animate-spin' />
    </div>
  )
}

export default Authloading