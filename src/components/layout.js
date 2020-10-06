/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import OffCanvasSidebar from "./off-canvas-sidebar"
import StaticSidebar from "./static-sidebar"

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleOffCanvasSidebar = event => {
    event.preventDefault()
    setShowMenu(!showMenu)
  }

  return (
    <div className="h-screen flex overflow-hidden bg-black-dark">
      <OffCanvasSidebar
        showMenu={showMenu}
        handleOffCanvasSidebar={handleOffCanvasSidebar}
      />
      <StaticSidebar />
      <div
        className={`flex flex-col w-0 flex-1 overflow-hidden ${
          !showMenu ? "z-50" : ""
        }`}
      >
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
            onClick={handleOffCanvasSidebar}
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
