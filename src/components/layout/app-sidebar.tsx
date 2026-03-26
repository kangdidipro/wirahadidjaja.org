"use client"

import * as React from "react"
import {
  BookOpen,
  Calendar,
  History,
  LayoutDashboard,
  Search,
  Users
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Direktori Keluarga",
    url: "/directory",
    icon: Users,
  },
  {
    title: "Arsip Sejarah",
    url: "/archive",
    icon: History,
  },
  {
    title: "Aktivitas & Acara",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Informasi Publik",
    url: "/public-info",
    icon: Search,
  },
  {
    title: "Layanan Khusus",
    url: "/services",
    icon: BookOpen,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b py-4">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="font-headline font-bold text-lg">W</span>
          </div>
          {state !== "collapsed" && (
            <div className="flex flex-col overflow-hidden">
              <span className="font-headline font-semibold leading-tight truncate">Wirahadidjaja</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Keluarga Besar</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="py-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                isActive={pathname === item.url}
                tooltip={item.title}
                className="hover:text-primary transition-all duration-200"
              >
                <Link href={item.url}>
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        {state !== "collapsed" && (
          <div className="text-[10px] text-center text-muted-foreground">
            © 2024 Keluarga Besar Wirahadidjaja
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
