'use server'
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/wait";

//To create collection
export const createCollection = async(form) => {
    const user = await currentUser();
    if (!user) {
        throw new Error('User not found');
    }

    // await wait(3000)

    return await prisma.collection.create({
        data: {
            userId: user.id,
            color: form.color,
            name: form.name
        }
    })
}

//To delete collection
export const deleteCollection = async(id) => {
    const user = await currentUser();
    if (!user) {
        throw new Error('User not found');
    }

    // await wait(5000)
    return await prisma.collection.delete({
        where: {
            userId: user.id,
            id: id,
        }
    })
}