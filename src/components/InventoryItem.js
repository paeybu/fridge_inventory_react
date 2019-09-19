import React from 'react'

const InventoryItem = ({ item }) => {
  const classNamePriority = () => {
    if (item.priority === 1) return 'red-text'
    else if (item.priority === 2) return 'orange-text'
    else return 'green-text'
  }
  return (
    <>
      <li className={classNamePriority()}>
        {item.name} : {item.amount}
      </li>
    </>
  )
}

export default InventoryItem
