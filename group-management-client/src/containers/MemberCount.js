//shows the current member count
import React from 'react'
export const MemberCount = (props) => {
  return (
    <div>
      <h1>Member Count</h1>
      <h3>{props.memberCount}</h3>
    </div>
    )
}
