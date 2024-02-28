import type { FC } from "react"
import SocialList from "./social-list"
import siteCfg from "@/config/site.config"

const Introdution: FC = () => {
  return (
    <div>
      <div className="mb-4 text-3xl font-medium tracking-wider">Yoo!</div>
      <div className="text-description mb-4">
        <p className="text-xl">
          Hi! Im{" "}
          <span className="cursor-pointer font-medium text-black decoration-cyan-700 decoration-2 transition duration-700 ease-in-out hover:underline hover:underline-offset-2">
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

export default Introdution
