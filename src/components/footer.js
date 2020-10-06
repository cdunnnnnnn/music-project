import React from "react"

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()}{" "}
      <a href="https://cdunn.io" target="_blank" rel="noreferrer">
        @cdunnnnnnn
      </a>
    </footer>
  )
}
