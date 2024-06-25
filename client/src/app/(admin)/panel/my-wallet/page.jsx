import ListTab from '@/app/_common/components/listTab'
import Wallet from '@/app/_common/components/wallet'
import AddBalance from '@/app/_common/components/addBalance/AddBalance'
import SummaryV3 from '@/app/_common/components/summary/SummaryV3'
import EfficiencyV2 from '@/app/_common/components/revenueFlow/EfficiencyV2'

function MyWallet() {
  return (
    <>
      <section className="2xl:w-[424px]">
        <AddBalance />
        <Wallet />
      </section>
      <div className="2xl:flex-1">
        <section className="w-full xl:flex xl:space-x-[24px]">
          <SummaryV3 />
          <EfficiencyV2 />
        </section>
        <ListTab />
      </div>
    </>
  )
}

export default MyWallet
