import ChatBoxLeftBar from '@/app/_common/components/message/ChatBoxLeftBar'
import AllMessageRes from '@/app/_common/components/message/AllMessageRes'
import Conversions from '@/app/_common/components/message/Conversions'

function Inbox() {
  return (
    <>
      <ChatBoxLeftBar />
      <AllMessageRes />
      <Conversions />
    </>
  )
}

export default Inbox
