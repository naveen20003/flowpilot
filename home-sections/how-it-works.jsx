const items =[
    {
        id: 1,
        name: "01 — Connect your workspace",
        meta: "Bring your projects, tasks, and essential tools into one connected place.",
    },
    {
        id: 2,
        name: "02 — Set your goals",
        meta: "Tell FlowPilot what you're working toward and what success looks like.",
    },
    {
        id: 3,
        name: "03 — Build your plan",
        meta: "Turn goals into structured tasks, priorities, and actionable next steps.",
    },
    {
        id: 4,
        name: "04 — Keep moving forward",
        meta: "Track progress, identify blockers, and keep your team focused on what matters.",
    },
]
function HowItWorks() {
  return (
    <div className="w-full py-20 flex flex-col gap-20">
        <div className="text-center flex flex-col gap-10">
            <div className='flex flex-col gap-10'>
                <h1 className="font-bold text-3xl">HOW IT WORKS</h1>
                <h1 className="font-bold text-xl">From scattered ideas to focused progress.</h1>
            </div>
        </div>
        <div className="flex justify-between md:px-10">
            <div className="flex flex-col p-5 text-start gap-10">
                {
                    items.map((i) => (
                        <div key={i.id}>
                            <h1 className="text-xl font-bold">{i.name}</h1>
                            <h3>{i.meta}</h3>
                        </div>
                    ))
                } 
            </div>
            <div className="hidden md:flex max-w-xl rounded-xl overflow-hidden">
                    <img 
                    src="/hiw.jpg" 
                    alt="how-it-works" 
                    className="object-cover"
                    />
            </div>           
        </div>
    </div>
  )
}

export default HowItWorks;