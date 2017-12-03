//shows on membershipmanagement how many members are pending.
import React from 'react'

export const PendingMemberCount = (props) => {
  return (
    <div>
      <h1>Pending Member Count</h1>
      <h3>{props.pendingMemberCount}</h3>
    </div>
  )
}
