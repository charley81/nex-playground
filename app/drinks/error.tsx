'use client'

export default function Error(error: Error) {
  console.log(error)
  return <div>Damn! Something broke: {error.error.message}</div>
}
