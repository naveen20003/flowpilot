import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen md:h-[600px] bg-[#FAFAFA] text-center flex flex-col gap-7 justify-start py-30">
        <img src="/desktop-flowpilot-hero.png" alt="" className="md:flex justify-center absolute bottom-10"/>
        {/* <img src="/mobile-hero-flowpilot.png" alt="" className="absolute bottom-10 md:hidden flex justify-center"/> */}
        <div className="">
            <h1 className="text-5xl">FlowPilot</h1>
            <h4 className="text-2xl pt-10">Turn scattered work into focused progress</h4>
            <h4 className="text-xs">FlowPilot brings your tasks, projects, and workflows into one intelligent workspace—so your team can spend less time managing work and more time moving it forward.</h4>
        </div>
        <div className="flex justify-center items-center gap-5">
            <Button className="bg-purple-700">start free</Button>
            <Button variant="outline">see how it works</Button>
        </div>
       {/* <div className="h-[800px] flex justify-center items-end overflow-hidden">
          <img 
           src="/desktop-flowpilot-hero.png" 
           alt=""
           className="w-full max-w-xl h-[280px] sm:h-[455px] lg:h-[800px] lg:max-w-4xl"
           />
       </div> */}
    </div>
  )
}

export default HeroSection;