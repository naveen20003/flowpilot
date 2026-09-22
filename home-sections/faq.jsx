import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "flowpilot",
    trigger: "What is FlowPilot?",
    content:
      "FlowPilot is an AI-powered productivity platform designed to help individuals and teams organize work, plan projects, and keep progress moving from one focused workspace.",
  },
  {
    value: "planning",
    trigger: "How does AI-powered planning work?",
    content:
      "You start by describing what you want to achieve. FlowPilot helps turn that goal into structured tasks, priorities, and actionable next steps.",
  },
  {
    value: "team",
    trigger: "Can I use FlowPilot with my team?",
    content:
      "Yes. FlowPilot is designed to support both individual workflows and shared team collaboration.",
  },
  {
    value: "plan",
    trigger: "Is there a free plan?",
    content:
      "Yes. The Starter plan lets you begin organizing your work before upgrading to more advanced features.",
  },
  {
    value: "cancel",
    trigger: "Can I cancel my subscription anytime?",
    content:
      "Yes. You can change or cancel your plan whenever you need.",
  },
  {
    value: "tools",
    trigger: "Which tools can FlowPilot connect with?",
    content:
      "The concept includes example integrations such as Slack, Google Drive, Notion, GitHub, Linear, and Figma.",
  },
  {
    value: "card",
    trigger: "Do I need to provide a credit card to start??",
    content:
      "No. You can start your free trial without entering payment details.",
  },
]

export function FaqSection() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <h3>Questions, Answered</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
        <div>
          <img src="/faq-image.jpg" alt="" className="object-cover rounded-xl"/>
        </div>
        <div>
          <Accordion multiple className="max-w-2xl px-5 border py-10 rounded-xl" defaultValue={["notifications"]}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
