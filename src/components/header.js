import { Link } from "gatsby"
import React from "react"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to={`/`}>
          <h1 className="flex items-center text-white font-extrabold tracking-widest leading-tight uppercase">
            <svg
              className="w-16 h-16 mr-3"
              height="300"
              width="300"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <path d="M69.5,79.4c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.2,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.2,0.1-0.4,0.1  c0,0,0,0,0,0c-0.1,0-0.3,0-0.4,0h-8v3c0,1.1-0.9,2-2,2H42c-1.1,0-2-0.9-2-2V73c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v3h7.1L91,49.3  C90.6,27,72.4,9,50,9C27.4,9,9,27.4,9,50s18.4,41,41,41c20.7,0,37.8-15.4,40.6-35.3L69.5,79.4C69.5,79.3,69.5,79.3,69.5,79.4z   M19.1,47.9c0,0.7-0.1,1.4-0.1,2.1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-19.3,15.7-35,35-35c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2  c-0.7,0-1.4,0-2.1,0.1C32.5,20.1,20.1,32.5,19.1,47.9z M34,50c0-8.8,7.2-16,16-16s16,7.2,16,16s-7.2,16-16,16S34,58.8,34,50z M62,50  c0-6.6-5.4-12-12-12s-12,5.4-12,12s5.4,12,12,12S62,56.6,62,50z M44,50c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S44,53.3,44,50z M50,52  c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C52,51.1,51.1,52,50,52z M44,81v-6h12v6H44z" />
            </svg>
            Music Project
          </h1>
        </Link>
      </div>
    </header>
  )
}
