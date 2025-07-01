'use client'

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup className='p-0'>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname.includes(item.url)
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={isActive ? 'bg-background-80' : ''}
              >
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 text-lg transition-colors duration-200 ${
                    isActive ? 'text-sidebar-accent-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon
                    className={`text-xl transition-colors duration-200 ${
                      isActive ? 'text-sidebar-accent-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavMain
