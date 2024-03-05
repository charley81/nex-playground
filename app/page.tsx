import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="">
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about" className="text-2xl block">
        About Page
      </Link>
      <Button variant="default">Submit</Button>
    </main>
  )
}
