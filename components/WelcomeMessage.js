
import { wait } from '@/lib/wait'
import { currentUser } from '@clerk/nextjs'

const WelcomeMessage = async () => {
    const user = await currentUser()
    // console.log(user);
    // await wait(4000)
    

    if (!user) return <div>error</div>
    return (
        <div className='flex w-full mb-12'>
            <h1 className="text-4xl font-bold">
                Welcome, <br /> {user.firstName} {user.lastName}
            </h1>
        </div>
    )
}

export default WelcomeMessage