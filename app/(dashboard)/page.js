import WelcomeMessage from "@/components/WelcomeMessage"
import WelcomeMsgFallbackUI from "@/components/WelcomeMsgFallbackUI"
import CollectionList from "@/components/CollectionList"
import { Suspense } from "react"


const Home = async () => {
  return (
    <>
      <Suspense fallback={<WelcomeMsgFallbackUI />}>
        <WelcomeMessage />
      </Suspense>
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionList />
      </Suspense>
    </>
  )
}

export default Home