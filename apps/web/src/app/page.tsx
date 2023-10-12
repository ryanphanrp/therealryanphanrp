'use client'
import { Button } from '@shadui/button'
import { Input } from '@shadui/input'
import { useToast } from '@shadui/use-toast'
import siteConfig from 'config/site.config'
import { useRef } from 'react'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const onClickMe = (_evt: React.MouseEvent) => {
    toast({
      title: siteConfig.title,
      description: inputRef.current?.value
    })
  }

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="container rounded-md border border-gray-600 bg-white p-4">
        <div>
          <Button variant="outline" onClick={onClickMe}>
            Please click me
          </Button>
          <Button
            onClick={() => {
              toast({
                title: 'Hello, My name is Ryan.',
                description: 'Thursday, October 12, 2023'
              })
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
