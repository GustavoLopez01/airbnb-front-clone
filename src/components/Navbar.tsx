import { useState } from 'react'
import UserOptions from '@/components/User/UserOptions'
import Modal from '@/components/Modal/Modal'
import Airbnb from '@/assets/icons/airbnb'
import World from '@/assets/icons/World'
import Search from '@/assets/icons/Search'


export default function Nabvar() {
  const [selectedOpt, setSelectedOpt] = useState("Alojamientos")
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal
        isOpen={showModal}
        setIsOpen={() => setShowModal(false)}
      />

      <nav className="w-full md:px-20 border-b-1 border-gray-200 pb-6">
        <div className="grid md:grid-cols-3 grid-cols-2 h-[80px]">
          <button className="text-main cursor-pointer w-32 order-1">
            <Airbnb />
          </button>

          <div className="flex justify-center items-center gap-6 cursor-pointer md:order-2 order-3">
            {["Alojamientos", "Experiencias"].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className={`px-3 py-2 ${item === selectedOpt ?
                  'font-airbnb-bd text-title' : 'font-airbnb-lt text-title-light hover:bg-gray-100 rounded-full'}`
                }
                onClick={() => setSelectedOpt(item)}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-end md:order-3 order-2">
            <span className="px-3 py-2 font-airbnb-lt text-sm font-semibold cursor-pointer rounded-full hover:bg-gray-100">
              Pon tu casa en Airbnb
            </span>
            <button
              className="px-3 py-3 rounded-full cursor-pointer hover:bg-gray-100"
              onClick={() => setShowModal(true)}
            >
              <World />
            </button>

            <div className="flex flex-col">
              <UserOptions />
            </div>
          </div>
        </div>

        <div className="flex justify-center visible">
          <div className="flex items-center border-1 border-gray-200 rounded-full gap-3 shadow-md md:min-w-[700px] md:max-w-[700px] h-[64px]">
            <div className="h-full flex flex-col justify-center cursor-pointer rounded-full hover:bg-gray-200 px-5">
              <label
                className="text-[12px] font-airbnb-lt font-semibold cursor-pointer"
              >
                Destino
              </label>
              <input
                type="text"
                className="outline-none text-sm text-gray-light"
                placeholder="Buscar destinos"

              />
            </div>

            {selectedOpt.includes("Alojamientos") ? (
              <div className='min-w-[240px] h-full grid grid-cols-2'>
                <div className="px-5 flex flex-col justify-center cursor-pointer rounded-full hover:bg-gray-200">
                  <label
                    className="text-[12px] font-airbnb-lt font-semibold cursor-pointer"
                  >
                    Llegada
                  </label>
                  <span
                    className="font-airbnb-lt outline-none text-sm text-gray-light"
                  >
                    Agregar f...
                  </span>
                </div>

                <div className="px-5 flex flex-col justify-center cursor-pointer rounded-full hover:bg-gray-200">
                  <label
                    className="text-[12px] font-airbnb-lt font-semibold cursor-pointer"
                  >
                    Salida
                  </label>
                  <span
                    className="font-airbnb-lt outline-none text-sm text-gray-light"
                  >
                    Agregar f...
                  </span>
                </div>
              </div>
            ) : (
              <div className="min-w-[240px] px-5 h-full flex flex-col justify-center cursor-pointer rounded-full hover:bg-gray-200">
                <label
                  className="text-[12px] font-airbnb-lt font-semibold cursor-pointer"
                >
                  Salida
                </label>
                <input
                  type="text"
                  className="outline-none text-sm text-gray-light"
                  placeholder="Agregar f..."

                />
              </div>
            )}

            <div className="w-full h-full flex justify-between cursor-pointer rounded-full hover:bg-gray-200 relative">
              <div className="flex flex-col justify-center pl-5">
                <label
                  className="text-[12px] font-airbnb-lt font-semibold cursor-pointer"
                >
                  Huéspedes
                </label>
                <span
                  className="font-airbnb-lt outline-none text-sm text-gray-light"
                >
                  ¿Cuántos?
                </span>
              </div>
              <button
                className="bg-main hover:bg-main-hover absolute right-0 top-[10px] cursor-pointer py-3 px-3 mx-2 rounded-full text-white flex justify-center">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
