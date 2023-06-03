'use client'

import Image from 'next/image'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'
import brandLogoWhite from '@/public/Tim-logo-white.png'
import { useTheme } from 'next-themes'

function Header() {
  const { theme } = useTheme()

  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-4 font-bold">
      <div className="flex items-center space-x-2">
        <Link
          href="/"
        >
          {theme === 'dark' ? (
            <Image
              className="object-cover"
              width={104}
              height={104}
              src={brandLogoWhite}
              alt="brand logo"
            ></Image>
          ) : (
            <Image
              className="object-cover"
              width={104}
              height={104}
              src={brandLogoWhite}
              alt="brand logo"
            ></Image>
          )}
        </Link>
        <h2>BLOG</h2>
      </div>
      <div>
        <DarkModeButton></DarkModeButton>
      </div>
    </header>
  )
}
export default Header
