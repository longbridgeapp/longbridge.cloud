import React from 'react'
import { Outlet } from 'react-router-dom'

const ApplicationLayout = () => {
  return (
    <div className="application-layout">
      <div className="layout-body mt-10">
        <Outlet />
      </div>
    </div>
  )
}
export default ApplicationLayout
