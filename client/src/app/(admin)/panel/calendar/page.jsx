import Wallet from '@/app/_common/components/wallet'
import CalenderSm from '@/app/_common/components/calender'
import CalenderFull from '@/app/_common/components/calender/CalenderFull'

function Calender() {
  return (
    <>
      <CalenderFull />
      <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
        <Wallet />
        <CalenderSm />
      </section>
    </>
  )
}

export default Calender
