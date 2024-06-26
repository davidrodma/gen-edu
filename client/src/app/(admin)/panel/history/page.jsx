import Wallet from '@/app/_common/components/wallet'
import TeamChat from '@/app/_common/components/teamChat'
import HistoryTable from '@/app/_common/components/listTab/HistoryTable'

function History() {
  return (
    <>
      <section className="mb-6 2xl:mb-0 2xl:flex-1">
        <HistoryTable />
      </section>
      <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
        <Wallet />
        <TeamChat />
      </section>
    </>
  )
}

export default History
