
function FooterSection() {
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-25 border-t sm:grid-cols-2 md:grid-cols-5 bg-white w-full h-[1000px] md:h-[500px]  text-black py-10 px-5">
        <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold font-serif">FlowPilot</h1>
            <h3 className="text-sm font-bold">A clearer way to plan, organize, and move work forward.</h3>
            <h1 className="font-thin">Instagram</h1>
            <h1 className="font-thin">Facebook</h1>
            <h1 className="font-thin">Youtube</h1>
            <h1 className="font-thin">LinkedIn</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Product</h1>
            <h1 className="font-thin">Features</h1>
            <h1 className="font-thin">Integrations</h1>
            <h1 className="font-thin">Pricing</h1>
            <h1 className="font-thin">Changelog</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Company</h1>
            <h1 className="font-thin">About</h1>
            <h1 className="font-thin">Careers</h1>
            <h1 className="font-thin">Contact</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Resources</h1>
            <h1 className="font-thin">Blog</h1>
            <h1 className="font-thin">Help Center</h1>
            <h1 className="font-thin">Documentation</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Legal</h1>
            <h1 className="font-thin">Privacy</h1>
            <h1 className="font-thin">Terms</h1>
        </div>
        <div className="sm:col-span-2 md:col-span-5 text-[10px] md:text-sm text-center flex flex-col justify-end">
            © 2026 FlowPilot. Concept project created for portfolio demonstration.
        </div>
    </div>
  )
}

export default FooterSection;