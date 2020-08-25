import React from "react"
import "../css/global.css"

function layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default layout
