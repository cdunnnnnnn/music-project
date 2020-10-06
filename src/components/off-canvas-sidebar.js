import React from "react"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"

export default function OffCanvasSidebar({ showMenu, handleOffCanvasSidebar }) {
  return (
    <div className="md:hidden">
      <div className={`fixed inset-0 flex z-50`}>
        {/*
       Off-canvas menu overlay, show/hide based on off-canvas menu state.

       Entering: "transition-opacity ease-linear duration-300"
         From: "opacity-0"
         To: "opacity-100"
       Leaving: "transition-opacity ease-linear duration-300"
         From: "opacity-100"
         To: "opacity-0"
     */}
        <div
          className={`fixed inset-0 transition ease-in-out duration-300 ${
            showMenu
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-white opacity-75" />
        </div>
        {/*
       Off-canvas menu, show/hide based on off-canvas menu state.

       Entering: "transition ease-in-out duration-300 transform"
         From: "-translate-x-full"
         To: "translate-x-0"
       Leaving: "transition ease-in-out duration-300 transform"
         From: "translate-x-0"
         To: "-translate-x-full"
     */}
        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-black-dark transition ease-in-out duration-300 transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-0 right-0 -mr-14 p-1">
            <button
              className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
              onClick={handleOffCanvasSidebar}
            >
              <svg
                className="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Header />
            </div>
            <nav className="mt-5 px-6 space-y-1">
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/136975`}
              >
                The Beatles
              </Link>
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/567072`}
              >
                Gorillaz
              </Link>
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/251553551`}
              >
                MGMT
              </Link>
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/289550`}
              >
                Outkast
              </Link>
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/420368335`}
              >
                Tyler, The Creator
              </Link>
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/3296287`}
              >
                Queen
              </Link>
              <Link
                className="block text-sm font-bold"
                activeClassName="text-white"
                to={`/artist/149256`}
              >
                Ween
              </Link>
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-gray-700 p-4">
            <Footer />
          </div>
        </div>
        <div className="flex-shrink-0 w-14">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </div>
  )
}
