import { Button } from "@/components/ui/button";
import NavSidebar from "./naviagtion-sidebar";
import Link from "next/link";

function NavigationSection() {
  return (
    <nav className="w-full h-15 sticky top-0 z-50 bg-[#111827] text-white flex justify-between py-4 px-13 rounded-b-4xl">
        <div>
            <h1 className="text-2xl font-bold">
                FlowPilot
            </h1>
        </div>
        <div className="md:hidden">
           <NavSidebar />
        </div>
        <div className="hidden w-full md:flex justify-center gap-5">
            <h1 className="">
                Product
            </h1>
            <h1>
                Solutions
            </h1>
            <Link href="/pricing">
                Pricing
            </Link>
            <h1>
                Resources
            </h1>
        </div>
        <div className="hidden md:flex">
            <Button className="bg-purple-700">
                try now
            </Button>
        </div>
    </nav>
  )
}

export default NavigationSection;