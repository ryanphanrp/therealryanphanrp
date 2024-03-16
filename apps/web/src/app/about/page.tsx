import Image from "next/image"
import React from "react"
import siteConfig from "@/config/site.config"

export default function Page(): React.ReactElement {
  return (
    <main className="md:text-md text-description text-sm">
      <Image alt="image" height="80" src="/pepe.svg" width="80" />
      <div className="my-4 text-2xl font-medium">Something about me</div>
      <div className="text-write-about">
        I&apos;m <span className="font-semibold">Ryan Phan</span>, a SWE and enthusiast, humorous guy.
      </div>
      <div className="text-write-about">I was born and grew up in a small rice-farming village in Binh Dinh.</div>
      <div className="text-write-about">
        As a art lover, but I want to learn system design or difficult thing, which help me improve myself then make a
        milestones in my career.
      </div>
      <div className="text-write-about">
        In my freetime, I listen to music, make a art things or have a coffee-time with my friend.
      </div>
      <div className="text-write-about">
        I spend a lot of time learning new things, what are make me better or help me work more valuable.
      </div>

      <br />
      <div className="text-write-about">Here is something what talk about me:</div>
      <ul className="mt-2 list-disc pl-6">
        <li>
          I was born in <span className="highlight-underline">Binh Binh</span>.
        </li>
      </ul>
      <br />
      <div className="text-write-about">
        Can connect me on{" "}
        <a className="highlight-underline" href={siteConfig.socialList.facebook} rel="noreferrer" target="_blank">
          Facebook
        </a>
        <span>. I am always open to interesting conversations and collaborations.</span>
      </div>
    </main>
  )
}
