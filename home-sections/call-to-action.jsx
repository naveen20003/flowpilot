import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'

function CallToAction() {
  return (
    <div className='w-full p-5 text-center flex flex-col justify-center gap-5'>
        <h1 className='font-serif text-xl md:text-2xl'>Ready to make progress feel simpler?</h1>
        <h4 className='text-sm'>Bring your tasks, projects, and workflows into one focused workspace—and spend more time moving forward.</h4>
        <div className='flex gap-5 justify-center'>
            <Input 
            className="w-full max-w-xs"
            placeholder="you@example.com"
            />
            <Button className="bg-purple-700">Free Trial</Button>
        </div>
        <h4 className='text-sm text-zinc-500'>No credit card required · Set up in minutes</h4>
    </div>
  )
}

export default CallToAction;