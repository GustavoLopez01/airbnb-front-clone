import {
  TabGroup,
  TabList,
} from '@headlessui/react'
import { Routes } from '@/types'
import { COLUMN_ONE, COLUMN_THREE, COLUMN_TWO, ROUTES } from '@/constants'
import facebookIcon from '@/assets/icons/facebook.svg'
import twitterIcon from '@/assets/icons/twitter.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import World from '@/assets/icons/World'
import CustomTab from '@/components/General/CustomTab'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 w-full p-6 flex flex-col items-center justify-center">
        <div className="w-full md:max-w-5xl md:w-3xl lg:w-5xl">
          <h3 className="text-[22px] font-airbnb-md py-3">
            Inspiración para futuras escapadas
          </h3>
          <TabGroup>
            <TabList
              className="flex gap-3 border-b-1 border-gray-300 py-2"
            >
              {["Categorías"].map((item) => (
                <CustomTab
                  key={item}
                  className="font-airbnb-md text-sm py-2 outline-0 cursor-pointer relative rounded-md hover:bg-gray-100"
                  isSelected={true}
                >
                  {item}
                </CustomTab>
              ))}
            </TabList>
          </TabGroup>

          <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mt-6">
            {ROUTES.map((route) => (
              <button
                key={route.id}
                className="font-airbnb-md cursor-pointer text-left text-sm"
              >
                {route.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 py-14 border-b border-gray-300">
            <RenderOptions
              options={COLUMN_ONE}
              title="Asistencia"
            />
            <RenderOptions
              options={COLUMN_TWO}
              title="Cómo ser anfitrión"
            />
            <RenderOptions
              options={COLUMN_THREE}
              title="Airbnb"
            />
          </div>

          <div className="flex flex-wrap justify-between mt-10">
            <div className="flex md:order-1 order-2 flex-wrap gap-2 items-center font-airbnb-lt text-sm">
              <span className="flex">
                © 2025 Airbnb, Inc.
              </span>
              <span className="flex gap-2">
                <span>·</span>
                <a className="cursor-pointer hover:underline">Privacidad</a>
              </span>
              <span className="flex gap-2">
                <span>·</span>
                <a className="cursor-pointer hover:underline">Términos</a>
              </span>
              <span className="flex gap-2">
                <span>·</span>
                <a className="cursor-pointer hover:underline">Mapa del sitio</a>
              </span>
              <span className="flex gap-2">
                <span>·</span>
                <a className="cursor-pointer hover:underline">Información de la compañia</a>
              </span>
            </div>

            <div className="flex md:order-2 order-1 gap-3 items-center">
              <button
                className="flex items-center gap-3 hover:bg-gray-300 rounded-md cursor-pointer p-2"
              >
                <World />
                Español MX
              </button>
              <button className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <img src={facebookIcon} className="w-4" />
              </button>

              <button className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <img src={twitterIcon} className="w-4" />
              </button>

              <button className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <img src={instagramIcon} className="w-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

type RenderOptionsProps = {
  options: Routes[]
  title: string
}

const RenderOptions = ({ options, title }: RenderOptionsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <button className="text-left font-semibold">
        {title}
      </button>
      {options.map((route) => (
        <button
          key={route.id}
          className="font-airbnb-lt text-slate-600 cursor-pointer text-left text-sm"
        >
          {route.label}
        </button>
      ))}
    </div>
  )
}
