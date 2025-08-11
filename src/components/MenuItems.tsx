import type { MenuItem } from "../types"

type MenuItemProps = {
    item : MenuItem,
    addItem : (item : MenuItem) => void
}

export default function MenuItems({item, addItem} : MenuItemProps) {
  return (
    <button
    className=" border-2 border-indigo-400 w-full p-3 flex justify-between hover:bg-indigo-200"
    onClick={()=>addItem(item)}>
    <p>{item.name}</p>
    <p className=" font-black">${item.price}</p>

    </button>
  )
}
