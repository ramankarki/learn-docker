import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export default function Header() {
  const router = useRouter()
  const linkContainerRef = useRef()

  useEffect(() => {
    Array.from(linkContainerRef.current.children).map((anchorTag) =>
      anchorTag.pathname === router.pathname
        ? anchorTag.classList.remove('opacity-60')
        : anchorTag.classList.add('opacity-60')
    )
  }, [router.pathname])

  return (
    <div>
      <h1 className='mt-10 text-center text-2xl font-bold'>
        Zero downtime deployment with Docker Swarm and Github Actions in Digital
        Ocean
      </h1>
      <div
        className='mx-auto mt-10 flex w-max gap-20 text-lg font-bold underline'
        ref={linkContainerRef}
      >
        <Link href='/'>Posts</Link>
        <Link href='/issues'>Issues</Link>
      </div>
    </div>
  )
}
