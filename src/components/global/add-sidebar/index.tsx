'use client'
import { Project, User } from '@/generated/prisma'
import React, { use } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import NavMain from './nav-main'
import RecenOpen from './recent-open'
import { data } from '@/lib/constants'
import NavFooter from './nav-footer'

function AppSidebar({
    recentProjects,
    user,
    ...props
}: {
    recentProjects: Project[]
} & { user: User } & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
        collapsible='icon'
        className='max-w-[212px] bg-background-90'
        {...props}
    >
      <SidebarHeader className='pt-6 px-3 pb-0'>
        <SidebarMenuButton
            size={'lg'}
            className='data-[state=open]:text-sidebar-accent-foreground'
        >
            <div className='flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground'>
                <Avatar className='h-20 rounded-full'>
                    <AvatarImage
                        src={'/presentationforge-logo.svg'}
                        alt={'presentationforge-logo'}
                    />
                    <AvatarFallback className='rounded-lg'>PF</AvatarFallback>
                </Avatar>

            </div>
            <span className='truncate text-primary font-semibold'>
                {' '}
                PresentationForge
            </span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent
        className='px-3 mt-10 gap-y-6'
      >
        <NavMain items={data.navMain}/>
        <RecenOpen recentProjects={recentProjects}  />
        
      </SidebarContent>
      <SidebarFooter>
        <NavFooter prismaUser={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar