import SadFace from '@/components/Icons/SadFace'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import prisma from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import CreateCollectionBtn from './CreateCollectionBtn'
import CollectionCard from './CollectionCard'


const page = async () => {
    const user = await currentUser()
    const collections = await prisma.collection.findMany({
        include: {
            tasks: true,
        },
        where: {
            userId: user?.id,
        },
    })

    console.log(collections);

    if (collections.length === 0) {
        return (
            <div className='flex flex-col gap-5'>
                <Alert>
                    <SadFace />
                    <AlertTitle>There are no collections yet!</AlertTitle>
                    <AlertDescription>Create a collection to get started</AlertDescription>
                </Alert>
                <CreateCollectionBtn />
            </div>
        )
    }

    return (
        <>
            <CreateCollectionBtn />
            <div className='flex flex-col gap-4 mt-6'>
                {collections.map(collection => (
                    <CollectionCard key={collection.id} collection={collection} />
                ))}
            </div>
        </>
    )
}

export default page