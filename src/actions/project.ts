"use server"

import { prisma } from "@/lib/prisma"
import { onAuthenticateUser } from "./user"
import { ReceiptPoundSterling } from "lucide-react"

export const getAllProjects = async () => {
    try {
        const checkUser = await onAuthenticateUser()
        if(checkUser.status !== 200 || !checkUser.user)
            return {status: 403, error: "User Not Authenticated"}

        const projects = await prisma.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted: false,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        })

        if(projects.length === 0)
            return { status: 404, error: "No Projects Found"}

        return { status: 200, data: projects}

    } catch (error) {
        console.log('ERROR', error)
        return {status: 500, error: "Internal Server Error"}
    }
}

export const getRecentProjects = async () => {
    try {
        const checkUser = await onAuthenticateUser()
        if(checkUser.status !== 200 || !checkUser.user)
            return {status: 403, error: "User Not Authenticated"}


        const projects = await prisma.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted: false,
            },
            orderBy: {
                updatedAt: 'desc',
            },
            take: 5,
        })

        if(projects.length === 0)
            return { status: 404, error: "No Recent Projects Available"}

        return { status: 200, data: projects}

    } catch (error) {
        console.log('ERROR', error)
        return {status: 500, error: "Internal Server Error"}
    }
}