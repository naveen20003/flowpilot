const items =[
    {
        id: 1,
        name: "AI-powered planning",
        meta: "Start with a goal. Leave with a plan",
        des: "Tell FlowPilot what you want to achieve, and turn a simple idea into structured tasks and actionable next steps in seconds."
    },
    {
        id: 2,
        name: "Smart workflows",
        meta: "Let repetitive work take care of itself.",
        des: "Create workflows that help your team handle recurring tasks, keep projects moving, and reduce unnecessary manual work."
    },
    {
        id: 3,
        name: "One shared workspace",
        meta: "Keep everyone on the same page.",
        des: "Bring tasks, projects, updates, and important information into one place Know what's happening, what's next, and where your team's attention is needed"
    },
    {
        id: 4,
        name: "Progress insights",
        meta: "See progress without chasing updates.",
        des: "Get a clearer picture of what's moving, what's blocked, and where projects need attention."
    },
]
function FEaturesSection() {
  return (
    <div className="w-full py-20 px-4 flex flex-col gap-20">
        <div className="text-center flex flex-col gap-10">
            <div>
                <h1 className="font-bold text-4xl">Features</h1>
            </div>
            <div>
                <h1 className="font-bold text-xl">Everything your team needs to move forward</h1>
                <h1 className="">From your first idea to your next milestone, FlowPilot gives your team a clearer way to plan and manage work.</h1>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 text-center gap-10">
            {
                items.map((i) => (
                    <div key={i.id}>
                        <h1 className="text-xl font-bold">{i.name}</h1>
                        <h3>{i.meta}</h3>
                        <p className="py-5">{i.des}</p>
                    </div>
                ))
            }            
        </div>
    </div>
  )
}

export default FEaturesSection;