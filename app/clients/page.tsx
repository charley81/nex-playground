'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Minus } from 'lucide-react'

export default function ClientPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-muted shadow-xl px-4 py-16 rounded-md flex sm:justify-center">
      <h1 className="text-2xl sm:text-4xl flex gap-2 items-center">
        Current count:
        <Button
          size="icon"
          variant="default"
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1)
            }
          }}
        >
          <Minus />
        </Button>
        {count}
        <Button
          variant="default"
          size="icon"
          onClick={() => setCount(count + 1)}
        >
          <Plus />
        </Button>
      </h1>
    </div>
  )
}
