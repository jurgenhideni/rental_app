import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export default function Img({ className, ...props }: ImageProps) {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <Image
      {...props}
      className={clsx(
        className,
        loading ? 'opacity-0' : 'opacity-100 transition'
      )}
      onLoadingComplete={() => setLoading(false)}
      alt=''
    />
  )
}
