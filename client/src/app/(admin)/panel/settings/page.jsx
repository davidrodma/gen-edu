'use client'
import { useState } from 'react'
import SettingsSidebar from '@/app/_common/components/settings/SettingsSidebar'
import TermsAndCondition from '@/app/_common/components/settings/TermsAndCondition'
import Security from '@/app/_common/components/settings/Security'
import Faq from '@/app/_common/components/settings/Faq'
import Payment from '@/app/_common/components/settings/Payment'
import ProgramAndResources from '@/app/_common/components/settings/ProgramAndResources'
import Notification from '@/app/_common/components/settings/Notification'
import PersonalInfo from '@/app/_common/components/settings/PersonalInfo'

function Settings() {
  const [activeTab, setActiveTab] = useState('personalInfo')
  return (
    <>
      {/* Sidebar  */}
      <SettingsSidebar activeTab={activeTab} handleActiveTab={setActiveTab} />
      {/* Tab Content  */}
      <div className="py-8 px-10 col-span-9 tab-content">
        {/* Personal Information */}
        <PersonalInfo name="personalInfo" activeTab={activeTab} />
        {/* Notification  */}
        <Notification name="notification" activeTab={activeTab} />
        {/* Program & Resources  */}
        <ProgramAndResources name="programAndResources" activeTab={activeTab} />
        {/* Payments  */}
        <Payment name="payment" activeTab={activeTab} />
        {/* Faq  */}
        <Faq name="faq" activeTab={activeTab} />
        {/* Security Password  */}
        <Security name="security" activeTab={activeTab} />
        {/* Terms & Condition  */}
        <TermsAndCondition name="termsAndConditions" activeTab={activeTab} />
      </div>
    </>
  )
}

export default Settings
