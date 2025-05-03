import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TabGroup,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Switch
} from '@headlessui/react'
import close from '@/assets/icons/close.svg'
import traductor from '@/assets/icons/traductor.svg'
import seen from '@/assets/icons/seen.svg'
import { LANGUAGES } from '@/constants/index.ts'

type ModalProps = {
  isOpen: boolean,
  setIsOpen: () => void
}

const DATA = [
  "test",
  "test",
]

const LanguageAndRegion = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <div className="bg-gray-bg-light flex flex-col rounded-md px-4 py-2 my-10 w-[620px]">
        <div className="flex items-center gap-4 py-2">
          <div className="flex flex-col gap-2">
            <span className="flex gap-2">
              Traducción
              <img src={traductor} className="w-5" />
            </span>
            <span className="text[14px] text-gray-light">
              Traduce automáticamente las descripciones y las evaluaciones al Español.
            </span>
          </div>
          <Switch
            checked={isChecked}
            onChange={setIsChecked}
            className="group relative flex h-8 w-12 cursor-pointer rounded-full bg-black p-[3px] ease-in-out focus:not-data-focus:outline-none data-checked:bg-black data-focus:outline data-focus:outline-white not-data-checked:bg-[#B0B0B0]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none inline-block size-7 translate-x-[-1.8px] translate-y-[-1px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"
            >
              {isChecked && <img src={seen} className="w-3 mt-2 ml-[7px]" />}
            </span>
          </Switch>
        </div>
      </div>

      <DialogTitle as="h3" className="text-base/7 font-medium text-[22px] text-black">
        Idioma y región sugeridos
      </DialogTitle>

      <div className="py-5">
        <div className="flex flex-col px-3 py-1 rounded-md cursor-pointer w-44 hover:bg-gray-bg-light">
          <span>Español</span>
          <span>Latinoamerica</span>
        </div>
      </div>

      <DialogTitle as="h3" className="text-base/7 font-medium mt-4 text-[22px] text-black">
        Elige un idioma y una región
      </DialogTitle>

      <div className="grid grid-cols-4 my-4 gap-4">
        {LANGUAGES.map((language, index) => (
          <div
            key={language.id}
            className={`
                flex flex-col px-3 py-1 rounded-md cursor-pointer w-[90%] hover:bg-gray-bg-light
                ${index === 0 ? 'border-1' : ''}
              `}
          >
            <span>{language.language}</span>
            <span className="text-gray-light">{language.country}</span>
          </div>
        ))}
      </div>
    </>
  )
}

const Currency = () => {
  return (
    <>
      <h3 className="text-base/7 font-medium text-[22px] py-3 text-black">
        Selecciona una moneda
      </h3>

      <div className="grid grid-cols-4 gap-6 my-4">
        {DATA.map((_, index) => (
          <div
            key={index}
            className="flex flex-col px-3 py-1 rounded-md cursor-pointer w-44 hover:bg-gray-bg-light"
          >
            <span>Español</span>
            <span>Latinoamerica</span>
          </div>
        ))}
      </div>
    </>
  )
}


const TABS = [
  { label: "Idioma y región", component: <LanguageAndRegion /> },
  { label: "Divisa", component: <Currency /> },
]

export default function Modal({ isOpen, setIsOpen }: ModalProps) {
  const [tabSelected, setTabSelected] = useState("Idioma y región")

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={setIsOpen}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-5xl max-h-[90vh] rounded-4xl bg-white py-4 
              backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] 
              data-closed:opacity-0"
            >
              <div className="px-5">
                <button
                  className="p-2 w-8 rounded-full cursor-pointer hover:bg-gray-100"
                  onClick={setIsOpen}
                >
                  <img src={close} className="w-4" />
                </button>
              </div>
              <div className="h-[80vh] overflow-auto mt-3">
                <div className="px-5">
                  <TabGroup>
                    <TabList className="flex gap-3 border-b-1 border-gray-300 py-2">
                      {TABS.map((tab, index) => (
                        <Tab
                          key={`${tab.label}-${index}`}
                          className={
                            `font-semibold px-2 py-2 relative
                            rounded-md hover:bg-gray-100 ${tabSelected.includes(tab.label) ?
                              'text-black' : 'text-gray-500 cursor-pointer'}`
                          }
                          onClick={() => setTabSelected(tab.label)}
                        >
                          {tab.label}
                        </Tab>
                      ))}
                    </TabList>

                    <TabPanels>
                      {TABS.map((tab) => (
                        <TabPanel
                          key={tab.label}
                        >
                          {tab.component}
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </TabGroup>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

