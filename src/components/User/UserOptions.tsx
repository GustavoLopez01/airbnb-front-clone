import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react'
import user from '@/assets/icons/user.svg'
import menu from '@/assets/icons/menu.svg'

export default function UserOptions() {
  return (
    <Menu>
      <MenuButton className="grid grid-cols-2 relative cursor-pointer items-center border-1 border-gray-200 rounded-full px-3 py-2 outline-0 hover:shadow-md">
        <img src={menu} className="w-4" />
        <img src={user} className="w-8" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-60 z-20 bg-white outline-0 origin-top-right rounded-xl border-gray-200
        text-sm/6 text-black font-airbnb-lt py-3 mt-2"
        style={{
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
        }}
      >
        <MenuItem>
          <button className="group m-0 flex cursor-pointer font-airbnb-md w-full items-center px-3 py-2 hover:bg-gray-100">
            Regístrate
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group m-0 flex cursor-pointer w-full items-center px-3 py-2 hover:bg-gray-100">
            Iniciar sesión
          </button>
        </MenuItem>
        <div className="my-1 h-px bg-gray-200" />
        <MenuItem>
          <button className="group m-0 flex cursor-pointer w-full items-center px-3 py-2 hover:bg-gray-100">
            Tarjetas de regalo
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group m-0 flex cursor-pointer w-full items-center px-3 py-2 hover:bg-gray-100">
            Pon tu espacio en airbnb
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group m-0 flex cursor-pointer w-full items-center px-3 py-2 hover:bg-gray-100">
            Organiza una experiencia
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group m-0 flex cursor-pointer w-full items-center px-3 py-2 hover:bg-gray-100">
            Centro de ayuda
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
