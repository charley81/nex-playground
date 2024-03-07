'use client'

import links from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col justify-between px-4 py-8 sm:flex-row max-w-4xl mx-auto lg:max-w-6xl">
      <h3 className="text-2xl font-extrabold">
        <Link href="/">
          nexplay
          <span className="text-primary">Ground</span>
        </Link>
      </h3>
      <ul className="flex gap-2">
        {links.map(link => (
          <li
            key={link.href}
            className={`capitalize tracking-wider ${
              pathname === link.href && 'text-primary'
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
