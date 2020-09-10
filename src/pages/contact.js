import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Contact us" />
    </div>
  )
}
