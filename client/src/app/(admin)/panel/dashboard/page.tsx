'use client'
import TotalWidget from '@/app/_common/components/widget/TotalWidget'
import RevenueFlow from '@/app/_common/components/revenueFlow'
import ListTab from '@/app/_common/components/listTab'
import Wallet from '@/app/_common/components/wallet'
import TeamChat from '@/app/_common/components/teamChat'
import Efficiency from '@/app/_common/components/revenueFlow/Efficiency'
import { useHeaderContext } from '@/app/_common/contexts/header.context'
import { useEffect } from 'react'

function Home() {
  const { setHeaderInfo } = useHeaderContext()
  useEffect(() => {
    setHeaderInfo('Dashboard', 'Let’s check your update today')
  }, [setHeaderInfo])

  return (
    <div className="2xl:flex 2xl:space-x-[48px]">
      <section className="mb-6 2xl:mb-0 2xl:flex-1">
        <TotalWidget />
        <div className="mb-[24px] w-full xl:flex xl:space-x-[24px]">
          <RevenueFlow />
          <Efficiency />
        </div>

        <ListTab />
      </section>
      <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
        <Wallet />
        <TeamChat />
      </section>
    </div>
  )
}

export default Home
