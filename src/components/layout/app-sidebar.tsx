'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { IconLayoutSidebarLeftExpand, IconLayoutSidebarRightExpand } from "@tabler/icons-react"
import { appSidebarItems } from "@/data/nav"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar"
// import AppSidebarHeader from "@/components/dashboard/sidebar-header"
// import AppSidebarFooter from "@/components/dashboard/sidebar-footer"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Separator } from "@/components/ui/separator"
import { VersionSwitcher } from "../dashboard/version-switcher"
import { SearchForm } from "../dashboard/search-form"



// Custom separator component for the sidebar
function SidebarSeparator() {
  return <Separator className="my-2 bg-sidebar-border" />
}

// Trigger button for the sidebar
export function AppTrigger() {
  const { toggleSidebar, open } = useSidebar()

  return <button onClick={toggleSidebar}>
    {open ? <IconLayoutSidebarLeftExpand size={20} /> : <IconLayoutSidebarRightExpand size={20} />}
  </button>
}

// Sidebar component
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  // Get the current path for active link highlighting
  const urlPath = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={appSidebarItems.versions}
          defaultVersion={appSidebarItems.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {appSidebarItems.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="uppercase">{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild isActive={urlPath === subItem.url}>
                      <Link href={subItem.url}>
                        <subItem.icon size={24} />
                        <span>{subItem.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />


      {/* <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Moderator" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Moderator Name</span>
            <span className="text-xs text-muted-foreground">Admin Level</span>
          </div>
        </div>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar >

  )
}
