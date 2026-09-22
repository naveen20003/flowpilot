
const items = [
    {
        id: 1,
        name: "starter",
        price: "$0/month",
        meta: "For individuals getting organized.",
        access: [
            {
                id: 1,
                data:  "up to 3 projects"
            },
            {
                id: 2,
                data: "personal workspace",
            },
            {
                id: 3,
                data: "basic task managment",
            },
            {
                id: 4,
                data: "progress tracking"
            },            
        ]
    },
    {
        id: 2,
        name: "Pro",
        price: "$19/month",
        meta: "small teams ready to move faster",
        access: [
            {
                id: 1,
                data:  "unlimited projects"
            },
            {
                id: 2,
                data: "ai-powered planning",
            },
            {
                id: 3,
                data: "smart workflows",
            },
            {
                id: 4,
                data: "advanced insights"
            },            
        ]
    },
    {
        id: 3,
        name: "Team",
        price: "$49/month",
        meta: "For teams that need more visibility",
        access: [
            {
                id: 1,
                data:  "everything in pro"
            },
            {
                id: 2,
                data: "shared team workspace",
            },
            {
                id: 3,
                data: "advanced analytics",
            },
            {
                id: 4,
                data: "team workflows"
            },            
        ]
    },
]
function PricingSection() {
  return (
    <div className="py-10 bg-linear-to-b from-gray-600 to-gray-200">
        <div className="text-center flex flex-col gap-10 text-white">
            <div className="text-5xl font-bold">
                Pricing
            </div>
            <div className="text-xl">
                <h1>Simple pricing that grows with you.</h1>
                <h1>Start small. Upgrade when your workflow needs more.</h1>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-10 py-10">
          {
            items.map((i) => (
                <div key={i.id} className="text-center flex flex-col gap-5 bg-gray-200 py-10 rounded-xl">
                    <h1 className="text-2xl font-bold">{i.name}</h1>
                    <h1 className="text-3xl font-bold">{i.price}</h1>
                    <h1 className="text-sm text-zinc-500 font-bold">{i.meta}</h1>
                    {
                        i.access.map((a) => (
                            <div key={a.id} className="">
                                <h3 className="text-sm text-zinc-500 font-bold">{a.data}</h3>
                            </div>
                        ))
                    }
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default PricingSection;