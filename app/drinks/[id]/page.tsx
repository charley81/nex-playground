import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { IDrink } from '@/types/types'

// get a single drink by ID
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

// get a single drink from cocktaildb.com server function
const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch drink with id: ${id}`)
  }
  return res.json()
}

export default async function SingleDrinkPage({
  params
}: {
  params: {
    id: string
  }
}) {
  const data: {
    drinks: IDrink[]
  } = await getSingleDrink(params.id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb
  const description = data?.drinks[0]?.strInstructions

  return (
    <div>
      <Link href="/drinks" className="flex items-end gap-2">
        <Button asChild size="icon">
          <ArrowLeft />
        </Button>
        <p className="text-gray-500">back</p>
      </Link>

      <div className="mt-8">
        <Image
          src={imgSrc}
          alt={title}
          width={300}
          height={300}
          priority
          className="w-48 h-48 rounded-lg shadow-lg mb-4"
        />

        <h1 className="text-2xl mb-8 text-gray-800">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
