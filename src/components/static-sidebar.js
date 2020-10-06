import React from "react"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"

export default function StaticSidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0 text-gray">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 px-8">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <Header />
            <nav className="mt-5 flex-1 px-2 space-y-1">
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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
