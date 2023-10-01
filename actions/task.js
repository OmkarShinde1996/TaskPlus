'use server'
import { currentUser } from "@clerk/nextjs"


export const createTask = async(data) => {
    const user = await currentUser()

    if (!user) {
        throw new Error('User not found');
    }

    return await prisma.task.create({
        data: {
            userId: user.id,
            content: data.content,
            expiresAt: data.expiresAt,
            collection: {
                connect:{
                    id: data.collectionId,
                }
            }
        }
    })
}

export const setTasktoDone = async(id) => {
    const user = await currentUser()

    if (!user) {
        throw new Error('User not found');
    }

    return await prisma.task.update({
        where: {
            id,
            userId: user.id,
        },
        data: {
            done: true,
        }
    })
}