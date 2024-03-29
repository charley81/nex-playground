import { StaticImport } from 'next/dist/shared/lib/get-img-props'

// nav
export interface Ilink {
  href: string
  label: string
}

// drinks
export interface IDrink {
  idDrink: string | null
  strDrink: string
  strDrinkAlternate: string | null
  strTags: null
  strVideo: null
  strCategory: string | null
  strIBA: string | null
  strAlcoholic: string | null
  strGlass: string | null
  strInstructions: string | null
  strInstructionsES: string | null
  strInstructionsDE: string | null
  strInstructionsFR: string | null
  strInstructionsIT: string | null
  'strInstructionsZH-HANS': string | null
  'strInstructionsZH-HANT': string | null
  strDrinkThumb: string | StaticImport
  strIngredient1: string | null
  strIngredient2: string | null
  strIngredient3: string | null
  strIngredient4: string | null
  strIngredient5: string | null
  strIngredient6: string | null
  strIngredient7: string | null
  strIngredient8: string | null
  strIngredient9: string | null
  strIngredient10: string | null
  strIngredient11: string | null
  strIngredient12: string | null
  strIngredient13: string | null
  strIngredient14: string | null
  strIngredient15: string | null
  strMeasure1: string | null
  strMeasure2: string | null
  strMeasure3: string | null
  strMeasure4: string | null
  strMeasure5: string | null
  strMeasure6: string | null
  strMeasure7: string | null
  strMeasure8: string | null
  strMeasure9: string | null
  strMeasure10: string | null
  strMeasure11: string | null
  strMeasure12: string | null
  strMeasure13: string | null
  strMeasure14: string | null
  strMeasure15: string | null
  strImageSource: string | null
  strImageAttribution: string | null
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null
}

// tasks
export type TaskType = {
  id: string
  content: string
  createdAt: Date
  completed: boolean
}

export type TaskFormDataType = {
  formData: {
    content: string
  }
}
