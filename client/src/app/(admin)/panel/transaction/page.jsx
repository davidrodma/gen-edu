import ListTab from '@/app/_common/components/listTab'
import TeamChat from '@/app/_common/components/teamChat'
import Wallet from '@/app/_common/components/wallet'

function Transaction() {
  return (
    <>
      <section className="2xl:w-70 w-full 2xl:mb-0 mb-6">
        <ListTab pageSize={9} />
      </section>
      <section className="2xl:flex-1 w-full">
        <Wallet />
        <TeamChat />
      </section>
    </>
  )
}

export default Transaction
