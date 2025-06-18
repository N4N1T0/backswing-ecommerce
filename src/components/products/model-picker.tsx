'use client'

import { getImageForModel, slugify } from '@/lib/utils'
import type { Formats } from '@/types'
import Image from 'next/image'
import React from 'react'

const ModelPicker = React.memo(
  ({
    formats,
    setModel
  }: {
    formats: Formats
    setModel: React.Dispatch<React.SetStateAction<Formats[number]>>
  }) => {
    return (
      <div className='mt-3 mb-5 space-y-5'>
        <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
          {formats.length} {formats.length > 1 ? 'Modelos' : 'Modelo'}
        </h5>
        <div className='flex-nowrap flex mt-1 gap-3'>
          {formats?.map((format) => {
            const { title } = format
            const formatTitle = title ? title : 'Modelo A'
            const id = slugify(formatTitle)
            const image = getImageForModel(formatTitle)
            return (
              <React.Fragment key={title}>
                <label
                  htmlFor={id}
                  className='block border hover:border-gray-500 w-1/4 h-auto has-checked:border-gray-900'
                >
                  <Image
                    src={image}
                    alt={formatTitle}
                    title={formatTitle}
                    width={200}
                    height={200}
                    className='object-cover w-full h-full'
                    priority
                  />
                  <input
                    type='radio'
                    id={id}
                    defaultValue={id}
                    aria-label={formatTitle}
                    name='model-selection'
                    className='sr-only'
                    onClick={() => {
                      setModel(format)
                    }}
                  />
                  <span className='sr-only'>{formatTitle}</span>
                </label>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }
)

ModelPicker.displayName = 'ModelPicker'
export default ModelPicker
