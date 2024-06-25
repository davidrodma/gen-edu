import Progressbar from '@/app/_common/components/chart/Progressbar'
import Note from '@/app/_common/components/support/Note'
import PresentAddress from '@/app/_common/components/support/PresentAddress'
import ShippingAddress from '@/app/_common/components/support/ShippingAddress'
import ContactInfo from '@/app/_common/components/support/ContactInfo'
import CustomerInfo from '@/app/_common/components/support/CustomerInfo'
import RecentSupport from '@/app/_common/components/support/RecentSupport'
import SupportHeader from '@/app/_common/components/support/Header'

import dynamic from 'next/dynamic'

const SupportTicket = dynamic(() => import('@/app/_common/components/forms/SupportTicket'), {
  ssr: false,
})

function Support() {
  return (
    <>
      {/* Left Column */}
      <div className="2xl:col-span-9 col-span-8">
        <SupportHeader />
        <div className="rounded-lg bg-white dark:bg-darkblack-600 px-6 py-8">
          <div className="2xl:flex justify-between gap-12">
            {/* Form  */}
            <SupportTicket />
            {/* Tabs  */}
            <RecentSupport />
          </div>
        </div>
      </div>
      {/* right Column */}
      <div className="w-full 2xl:col-span-3 col-span-4 space-y-10">
        <div className="bg-white dark:bg-darkblack-600 dark:border-darkblack-400 p-8 divide-y divide-bgray-300 dark:divide-darkblack-400 rounded-lg">
          {/* Customer  */}
          <CustomerInfo />
          {/* Contact Info  */}
          <ContactInfo />
          {/* Shipping Address */}
          <ShippingAddress />
          {/* Present Address  */}
          <PresentAddress />
        </div>
        {/* Note  */}
        <Note />
        {/* Progressbar  */}
        <Progressbar />
      </div>
    </>
  )
}

export default Support
