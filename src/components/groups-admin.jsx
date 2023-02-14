import React from 'react'
import GroupsForm from './groupsForm/groupsForm'
import AllGroups from './allGroupsForAdmin'

const GroupsAdmin = () => {
  return (
    <div className='w-100 ps-5'>
      <h2 className='mb-3 h3'>Add new group</h2>
      <GroupsForm />
      <AllGroups />
    </div>
  )
}

export default GroupsAdmin