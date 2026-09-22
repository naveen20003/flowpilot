import React from 'react'

function FeatureShowcaseSection() {
  return (
    <div className="w-full py-10 flex flex-col gap-20">
        <div className="text-center flex flex-col gap-10">
            <div className='flex flex-col gap-10'>
                <h1 className="font-bold text-2xl md:text-3xl">FEATURE SHOWCASE</h1>
                <h1 className="md:font-bold md:text-xl">Plan the work. Then get to it</h1>
            </div>
        </div>
        <div className="flex flex-col p-5 text-center gap-10">
            <div >
                <h1 className="text-xl font-bold">Turn goals into actionable steps.</h1>
                <p className="py-5">Start with a simple objective and let FlowPilot help structure the work ahead.
                    Define your goal. Break it into tasks. Organize priorities. Keep momentum.
                    You bring the direction. FlowPilot helps create the path forward.</p>
            </div>
            <div >
                <h1 className="text-xl font-bold">Keep projects moving without the constant follow-up</h1>
                <p className="py-5">See what your team is working on, what needs attention, and what is already moving forward—all from one place. No more digging through messages. No more wondering what's next.</p>
            </div>
        </div>
    </div>
  )
}

export default FeatureShowcaseSection;