import React from "react"
import siteCfg from "@/config/site.config"
import SocialList from "./social-list"

export default function Introduction(): React.ReactElement {
  return (
    <div>
      <div className="mb-4 text-3xl font-medium tracking-wider">Yoo!</div>
      <div className="text-description mb-4">
        <p className="text-xl">
          Hi! Im{" "}
          <span className="decoration-primary cursor-pointer font-medium text-black decoration-2 transition duration-700 ease-in-out hover:underline hover:underline-offset-2">
            {siteCfg.me}
          </span>
          👋.
        </p>
        <p>{siteCfg.introduction}</p>
        <p className="italic tracking-widest">Chaiyoo!</p>
      </div>
      <div className="text-description flex items-center">
        Find me on <SocialList />
      </div>
    </div>
  )
}
