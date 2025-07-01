"use client"
import { Button } from '@/components/ui/button'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@/generated/prisma'
import { JsonValue } from '@/generated/prisma/runtime/library'
import { useSlideStore } from '@/store/useSlideStore'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

type Props = {
    recentProjects: Project[]
}

function RecenOpen({recentProjects}: Props) {
    const router = useRouter()
    const {setSlides} = useSlideStore()

    const handClick = (projectId: string, slides: JsonValue) => {
        if(!projectId || !slides) {
            toast.error('Project Not Found', {
                description: 'Please try again',
            })
            return
        }

        setSlides(JSON.parse(JSON.stringify(slides)))
        router.push(`/prensetation/${projectId}`)
    }
  return (
    recentProjects.length > 0 ? (
        <SidebarGroup>
        <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>

        <SidebarMenu>
            {recentProjects.length > 0 ? (
                recentProjects.map((item, idx) => (
                    <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton asChild tooltip={item.title} className={`hover:bg-primary-80`}>
                            <Button
                                variant={'link'}
                                onClick={() => handClick(item.id, item.slides)}
                                className={`text-xs items-center justify-center`}
                            >
                                <span>{item.title}</span>
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))
            ) : (
                ''
            )}
        </SidebarMenu>
    </SidebarGroup>
    ) : ''
    
  )
}

export default RecenOpen