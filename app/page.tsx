import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl mb-4">Home Page</h1>
      <Button variant="default" asChild>
        <Link href="/clients">Get started</Link>
      </Button>
    </main>
  )
}
