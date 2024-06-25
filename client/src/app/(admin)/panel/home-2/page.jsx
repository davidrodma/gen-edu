import ListTab from '@/app/_common/components/listTab'
import Wallet from '@/app/_common/components/wallet'
import Calender from '@/app/_common/components/calender'
import TotalWidgetV2 from '@/app/_common/components/widget/TotalWidgetV2'
import Efficiency from '@/app/_common/components/revenueFlow/Efficiency'
import Summary from '@/app/_common/components/summary'
import Location from '@/app/_common/components/summary/Location'

function HomeTwo() {
  return (
    <>
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
          <TotalWidgetV2 />
          <Efficiency height="h-[180px]" />
        </div>
        <div className="w-full mb-[24px] flex space-x-[24px]">
          <Summary />
          <Location />
        </div>

        <ListTab />
      </section>
      <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
        <Wallet />
        <Calender />
      </section>
    </>
  )
}

export default HomeTwo
