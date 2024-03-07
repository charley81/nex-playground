import DrinkList from '@/components/drinks/drink-list'
import { IDrink } from '@/types/types'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z'

const fetchDrinks = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default async function DrinksPage() {
  const drinksDataByLetterA = await fetchDrinks()

  return (
    <div className="mt-16">
      <DrinkList drinks={drinksDataByLetterA.drinks} />
    </div>
  )
}
