import React from "react"

export default function Link({ ...props }) {
  return (
    <a
      className="hover:text-primary italic text-neutral-700 underline underline-offset-4 transition duration-1000 ease-in-out hover:font-medium"
      {...props}
    />
  )
}
