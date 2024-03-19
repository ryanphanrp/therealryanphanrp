"use client"

import React from "react"
import { Button } from "ui//button"
import Introduction from "../components/introduction"

export default function Home(): React.ReactElement {
  return (
    <section className="h-full w-full p-4">
      <Button>hehee</Button>
      <Introduction />
    </section>
  )
}
