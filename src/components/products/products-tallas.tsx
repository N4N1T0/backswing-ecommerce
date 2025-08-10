import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sizes } from '@/types'
import { memo } from 'react'

const ProductsTallas = ({
  tallas,
  setTalla,
  selectedTalla
}: {
  tallas: Sizes[] | null
  setTalla: React.Dispatch<React.SetStateAction<string>>
  selectedTalla: string
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTalla(e.target.value)
  }

  return (
    <fieldset className='space-y-3'>
      <legend className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
        {tallas?.length} Tallas
      </legend>
      <div className='flex flex-wrap gap-4'>
        {tallas &&
          tallas.map((talla) => (
            <Label
              key={talla}
              htmlFor={talla}
              className={`cursor-pointer text-lg hover:text-gray-500 transition-colors duration-200 px-3 py-1 border border-gray-500 ${
                selectedTalla === talla
                  ? 'bg-gray-900 text-gray-100 pointer-events-none'
                  : 'text-gray-900'
              }`}
            >
              <Input
                type='radio'
                id={talla}
                value={talla}
                aria-label={talla}
                onChange={handleChange}
                name='size-selection'
                className='sr-only'
                checked={selectedTalla === talla}
              />
              {/* Display the talla name */}
              {talla}
            </Label>
          ))}
      </div>
    </fieldset>
  )
}

export default memo(ProductsTallas)
