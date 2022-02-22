import { Button } from '../../../components/atoms/Button'

export const Card = ({ title, category, cost }) => {
  return (
    <section className="relative flex flex-col justify-between gap-4 bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="flex h-8 items-center justify-center self-start rounded-full bg-purple-100 px-2 text-purple-900">
        {category}
      </p>
      <p className="font-medium">{cost}</p>

      <footer className="flex w-full justify-between">
        <Button variant="ghost">Edit</Button>

        <Button variant="ghost">Remove</Button>
      </footer>
    </section>
  )
}
