import React from 'react'

export default function UserInfo({params}: { params: { myname: string}}) {
  return (
    <div>My name is {params.myname}</div>
  )
}
