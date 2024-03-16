import React from "react"

export function AnimateLoading(): React.ReactElement {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center backdrop-blur-md">
      <img alt="mona loading" height="80" src="mona-loading.gif" width="80" />
      <div className="text-md mt-2 font-semibold text-gray-700">One moment please...</div>
    </div>
  )
}
