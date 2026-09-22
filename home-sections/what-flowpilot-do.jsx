
function WhatFlowpilotDo() {
  return (
    <div className="w-full text-black pt-25 flex flex-col gap-15 text-center">
        <div>
            <h1 className="font-serif text-center text-3xl font-bold">What flowpilot actually do?</h1>
        </div>
        <div className="px-5 text-center text-sm">
            <h1 className="text-center text-xl font-light">Work shouldn't feel like work about work.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-md font-bold bg-red-500 max-w-[70px] md:max-w-[100px] rounded-xl">Problem</h1>
                <h3 className="text-3xl font-bold">Your team's attention is constantly pulled in different directions.</h3>
                <p>Tasks live in one tool. Conversations happen in another. Important updates disappear in endless messages. Before long, more time is spent organizing work than actually doing it.</p>
            </div>
            <div className="w-full overflow-hidden flex justify-center max-w-md md:max-w-xl">
                <img src="/frustreted-people-1.jpg" alt="" className="rounded-xl" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <div className="md:hidden flex flex-col justify-center gap-5">
                <h1 className="text-md font-bold bg-green-500 max-w-[70px] md:max-w-[100px] rounded-xl">Solution</h1>
                <h3 className="text-3xl font-bold">FlowPilot brings the work back together.</h3>
                <p>One focused workspace for planning, organizing, automating, and moving projects forward.</p>
            </div>
            <div className="w-full overflow-hidden flex justify-center max-w-md md:max-w-xl">
                <img src="/happy-employee.jpg" alt="" className="rounded-xl" />
            </div>
            <div className="hidden md:flex flex-col justify-center gap-5">
                <h1 className="text-md font-bold bg-green-500 max-w-[70px] md:max-w-[100px] rounded-xl">Solution</h1>
                <h3 className="text-4xl font-bold">FlowPilot brings the work back together.</h3>
                <p>One focused workspace for planning, organizing, automating, and moving projects forward.</p>
            </div>
        </div>
    </div>
  )
}

export default WhatFlowpilotDo;