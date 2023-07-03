import Img from './Img'
import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'

const Carousel = ({ images }: any) => {
  const [startIndex, setStartIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const handlePrev = () => {
    setStartIndex(prevIndex => prevIndex - 4)
  }
  const handleNext = () => {
    setStartIndex(prevIndex => prevIndex + 4)
  }

  const isLeftDisabled = startIndex === 0
  const isRightDisabled = startIndex + 4 >= images.length

  const handleImageClick = (image: any) => {
    setSelectedImage(image)
  }

  const displayedImages = images.slice(startIndex, startIndex + 4)

  const selectPreviousImage = () => {
    const currentIndex = images.indexOf(selectedImage)
    if (currentIndex > 0) {
      const previousImage = images[currentIndex - 1]
      setSelectedImage(previousImage)
    }
  }

  const selectNextImage = () => {
    const currentIndex = images.indexOf(selectedImage)
    if (currentIndex < images.length - 1) {
      const nextImage = images[currentIndex + 1]
      setSelectedImage(nextImage)
    }
  }

  return (
    <div>
      <div>
        <Img
          src={selectedImage}
          width={750}
          height={600}
          className='rounded-lg'
          alt='image'
        />
        <div className='flex justify-between relative bottom-[250px] gap-20 max-h-[50px]'>
          <button
            onClick={selectPreviousImage}
            className='bg-slate-100 bg-opacity-50 mx-2'
          >
            <FcPrevious className='text-[2rem]' />
          </button>
          <button
            onClick={selectNextImage}
            className='text-[2rem] bg-slate-200 bg-opacity-50 mx-2'
          >
            <FcNext />
          </button>
        </div>
      </div>
      <div className='py-2 grid grid-cols-4'>
        {displayedImages.map((image: any, index: number) => (
          <Img
            key={index}
            src={image}
            alt={`img-${index}`}
            width={188}
            height={90}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className='flex items-center justify-center gap-10'>
        <button
          className='flex items-center gap-2 hover:bg-blue-400 p-1 hover:text-white rounded-md'
          onClick={handlePrev}
          disabled={isLeftDisabled}
        >
          <AiOutlineArrowLeft /> Previous
        </button>
        <button
          className='flex items-center gap-2 p-1 hover:bg-blue-400 hover:text-white rounded-md'
          onClick={handleNext}
          disabled={isRightDisabled}
        >
          Next <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Carousel
