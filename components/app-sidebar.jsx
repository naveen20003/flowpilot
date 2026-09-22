import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button";

// This is sample data.
const item = [
  {
    id: 1,
    name: "Product",
    url: "#"
  },
  {
    id: 2,
    name: "Solutions",
    url: "#"
  },
  {
    id: 3,
    name: "Pricing",
    url: "/pricing"
  },
  {
    id: 4,
    name: "Resources",
    url: "#"
  }
]
export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton render={<a href={item.url} className="font-medium" />}>
                    {item.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Button className="bg-purple-700 max-w-[100px] font-mediumpt mt-2">Try Now</Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
