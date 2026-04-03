'use client'

import { init } from '@waline/client'
import '@waline/client/style'
import { useEffect, useRef } from 'react'

export default function WalineComments({ path }: { path: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    init({
      el: containerRef.current,
      serverURL: 'https://your-waline-project.vercel.app',
      path: path,
      lang: 'zh-CN',
      locale: {
        placeholder: '欢迎评论，无需登录~',
      },
    })
  }, [path])

  return <div ref={containerRef} className="waline-container" />
}
