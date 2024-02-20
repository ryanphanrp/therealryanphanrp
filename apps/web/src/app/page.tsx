"use client"
import { Button } from "@shadui/button"
import { Input } from "@shadui/input"
import siteConfig from "config/site.config"
import { useRef } from "react"
import { toast } from "@shadui/sonner"

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickMe = (_evt: React.MouseEvent) => {
    toast.message(siteConfig.title, {
      description: inputRef.current?.value
    })
  }

  return (
    <section className="flex h-full w-full items-center justify-center p-4">
      <div className="container rounded-md border border-gray-600 bg-white p-4">
        <div>
          <Button variant="outline" onClick={onClickMe}>
            Please click me
          </Button>
          <Button
            onClick={() => {
              toast.info("Hello, My name is Ryan.")
            }}>
            Button
          </Button>
        </div>
        <br className="my-4" />
        <Input ref={inputRef} type="text" placeholder="Type your name" />
      </div>
    </section>
  )
}
