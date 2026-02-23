import React from 'react'
import { GuestHeader } from '../layouts/frontend/guest-header'

 function index({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}

index.layout = page => <GuestHeader>{page}</GuestHeader>



export default index
