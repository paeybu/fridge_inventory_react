import React from 'react'

const InventoryItem = ({ item, deleteItem }) => {
  const classNamePriority = () => {
    if (item.priority === 1) return 'red-text clearfix'
    else if (item.priority === 2) return 'orange-text clearfix'
    else return 'green-text clearfix'
  }

  return (
    <>
      <li className={classNamePriority()}>
        <span>
          {item.name} : {item.amount}
        </span>
        <button
          className="right"
          onClick={() => {
            if (window.confirm('คุณต้องการลบรายการนี้ไหม?')) deleteItem(item.id)
          }}
        >
          <i className="material-icons red-text text-darken-2">remove_circle</i>
        </button>
      </li>
    </>
  )
}

export default InventoryItem
