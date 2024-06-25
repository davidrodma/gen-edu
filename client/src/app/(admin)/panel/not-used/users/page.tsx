import UserFilter from '@/app/_common/components/forms/UserFilter'
import UsersList from '@/app/_common/components/user/UsersList'
import RightSidebar from '@/app/_common/components/user/RightSidebar'

function Users() {
  return (
    <>
      <div className="2xl:flex-1 w-full">
        <UserFilter />
        <UsersList />
      </div>
      <RightSidebar />
    </>
  )
}

export default Users
