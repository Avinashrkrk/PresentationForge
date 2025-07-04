'use client'

import { Button } from '@/components/ui/button'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { User } from '@/generated/prisma'
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function NavFooter({prismaUser}: {prismaUser: User}) {
    const {isLoaded, isSignedIn, user} = useUser()
    const [loading, setloading] = useState(false)
    const router = useRouter()

    if(!isLoaded || !isSignedIn)
        return null
  
  return (
    <SidebarMenu>
        <SidebarMenuItem>
            <div className='flex flex-col gap-y-6 items-start group-data-[collapsible=icon]:hidden'>
                {!prismaUser.subscription && (
                    <div className='relative overflow-hidden'>
                        {/* Subtle animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 animate-pulse"></div>
                        
                        <div className='flex flex-col items-start p-3 pb-4 gap-4 bg-background-80 rounded-lg border border-purple-500/10 relative backdrop-blur-sm'>
                            <div className='flex items-start gap-3 w-full'>
                                {/* Premium icon */}
                                <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 flex-shrink-0 mt-0.5'>
                                    <svg className='w-4 h-4 text-presentationForge' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                
                                <div className='flex flex-col items-start gap-1 flex-1'>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-base font-bold leading-tight'>
                                            Get <span className='text-presentationForge bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold'>Creative AI</span>
                                        </p>
                                        {/* Sparkle effect */}
                                        <div className='w-1 h-1 bg-yellow-400 rounded-full animate-pulse'></div>
                                    </div>
                                    <span className='text-sm text-shadow-white leading-relaxed'>
                                        Unlock all features including AI and more
                                    </span>
                                </div>
                            </div>

                            {/* Enhanced button with better styling */}
                            <div className='w-full relative group'>
                                {/* Subtle glow on hover */}
                                <div className='absolute -inset-0.5 bg-vivid-gradient rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
                                
                                <div className='w-full bg-vivid-gradient p-[1px] rounded-full relative'>
                                    <Button
                                        className='w-full border-vivid bg-background-80 hover:bg-background-90 text-primary rounded-full font-bold transition-all duration-200 hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70'
                                        variant={'default'}
                                        size={'lg'}
                                        disabled={loading}
                                        // onClick={handleUpgrading}
                                    >
                                        {loading ? (
                                            <>
                                                <div className='w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin'></div>
                                                <span>upgrading...</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                <span>upgrade</span>
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Subtle feature hints */}
                            <div className='flex flex-wrap gap-1.5 w-full opacity-80'>
                                {['AI Tools', 'Templates', 'Priority'].map((feature) => (
                                    <div key={feature} className='flex items-center gap-1 px-2 py-0.5 bg-background-90/50 rounded-full border border-purple-500/20'>
                                        <div className='w-1.5 h-1.5 bg-presentationForge rounded-full'></div>
                                        <span className='text-xs text-shadow-white font-medium'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <SignedIn>
                    <SidebarMenuButton 
                        size={'lg'}
                        className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                    >
                        <UserButton />
                        <div className='grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden'>
                            <span className='truncate font-semibold'>{user?.fullName}</span>
                            <span className='truncate text-shadow-white'>{user?.emailAddresses[0]?.emailAddress}</span>
                        </div>
                    </SidebarMenuButton>
                </SignedIn>
            </div>
        </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default NavFooter