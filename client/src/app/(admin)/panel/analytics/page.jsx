import ListTab from '@/app/_common/components/listTab'
import TeamChat from '@/app/_common/components/teamChat'
import EfficiencyV2 from '@/app/_common/components/revenueFlow/EfficiencyV2'
import SummaryV3 from '@/app/_common/components/summary/SummaryV3'

function Analytics() {
  return (
    <>
      <section className="2xl:w-70 w-full 2xl:mb-0 mb-6">
        <SummaryV3 />
        <ListTab />
      </section>
      <section className="2xl:flex-1 w-full">
        <EfficiencyV2 />
        <TeamChat />
      </section>
    </>
  )
}

export default Analytics
