import { IDrink } from '@/types/types'

const url = 'https://www.hecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default async function DrinksPage() {
  const drinksDataByLetterA = await fetchDrinks()

  return (
    <div>
      <h1 className="text-4xl">Drinks page</h1>
      {drinksDataByLetterA.drinks.map((item: IDrink) => (
        <div key={item.idDrink}>{item.strDrink}</div>
      ))}
    </div>
  )
}
