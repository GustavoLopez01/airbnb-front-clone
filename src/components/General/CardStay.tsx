import { useState } from 'react'
import hearth from '@/assets/icons/hearth.svg'
import star from '@/assets/icons/star.svg'
import chevronRight from '@/assets/icons/chevron-right.svg'
import chevronLeft from '@/assets/icons/chevron-left.svg'
import { IMAGE_STAYS } from '@/constants'


export default function CardStay() {
  const [showButtonAction, setShowButtonAction] = useState(false)
  const [images, setImages] = useState<string[]>(IMAGE_STAYS[0].images)
  const [currentImage, setCurrentImage] = useState(images[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <div
        className="w-[297px] flex flex-col cursor-pointer"
        onMouseEnter={() => setShowButtonAction(true)}
        onMouseLeave={() => setShowButtonAction(false)}
      >
        <div className="relative">
          <div className="flex rounded-full cursor-pointer bg-white font-airbnb-md py-1 px-5 top-4 left-4 absolute text-sm">
            Favorito entre huéspe..
          </div>
          <button className="size-6 transition duration-100 ease-in-out hover:scale-110 cursor-pointer bg-transparent absolute top-5 right-5">
            <img
              src={hearth}
              alt="heart-icon"
            />
          </button>
          <img
            src={currentImage}
            className="w-full h-[290px] rounded-3xl object-cover"
            alt="stay-image"
          />
          {(showButtonAction && currentIndex !== 0) && (
            <button
              className="bg-white/85 shadow size-8.5 rounded-full absolute 
                top-1/2 left-4 transform -translate-y-1/2 cursor-pointer 
                transition duration-75 ease-in-out hover:scale-105 hover:bg-white"
              onClick={() => {
                setCurrentIndex(currentIndex - 1)
                setCurrentImage(images[currentIndex - 1])
              }}
            >
              <img
                src={chevronLeft}
                className="px-2.5"
                alt="arrow-right"
              />
            </button>
          )}

          {(showButtonAction && currentIndex !== images.length - 1) && (
            <button
              className="bg-white/85 shadow size-8.5 rounded-full absolute 
              top-1/2 right-4 transform -translate-y-1/2 cursor-pointer 
              transition duration-75 ease-in-out hover:scale-105 hover:bg-white"
              onClick={() => {
                setCurrentIndex(currentIndex + 1)
                setCurrentImage(images[currentIndex + 1])
              }}
            >
              <img
                src={chevronRight}
                className="px-2.5"
                alt="arrow-right"
              />
            </button>
          )}
          <ButtonPhotos
            images={images}
            currentIndex={currentIndex}
          />
        </div>
        <div className="flex justify-between py-2 px-1">
          <div className="flex flex-col font-airbnb-lt text-gray-light">
            <span className="font-airbnb-md text-black">
              Concan, Texas, Estados Uni...
            </span>
            <span>
              A 1,138 km de distancia
            </span>
            <span>
              13-18 de may
            </span>
            <p className="font-airbnb-md text-black underline">
              $22,900 MXN
            </p>
            <p>
              por 5 noches
            </p>
          </div>
          <p className="flex gap-1">
            <img
              src={star}
              className="size-3 mt-1.5"
              alt="star-icon"
            />
            4.93
          </p>
        </div>
      </div>
    </>
  )
}

type ButtonPhotosProps = {
  images: string[],
  currentIndex: number
}

const ButtonPhotos = ({ images, currentIndex }: ButtonPhotosProps) => {
  return (
    <div className="flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
      {images.map((__, index) => (
        <button
          className={`rounded-full h-2 w-2
            ${currentIndex === index ? 'bg-white' : 'bg-white/60'}`
          }
        >
        </button>
      ))}
    </div>
  )
} 
