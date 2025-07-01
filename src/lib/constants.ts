import { BookTemplate, Car, Home, LayoutTemplateIcon, LucideBookTemplate, Settings, Trash } from "lucide-react";

export const data ={
    user: {
        name: 'Shadcnm',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },

    navMain: [
        {
            title: 'Home',
            url: '/dashboard',
            icon: Home,
        },
        {
            title: 'Templates',
            url: '/templates',
            icon: LucideBookTemplate,
        },
        {
            title: 'Trash',
            url: '/trash',
            icon: Trash,
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: Settings,
        },
    ]
}