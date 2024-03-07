'use client'

import { useState } from 'react'
import { Rocket } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function DrinksLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Alert>
        <Rocket />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Here I'm demonstrating sharing components between pages in the drinks
          route with layouts
        </AlertDescription>
      </Alert>
      <div className="mt-32">{children}</div>
    </div>
  )
}
