import React from 'react'
import M from 'materialize-css'

const MenuForm = ({
  name,
  setName,
  preparationTime,
  setPreparationTime,
  addMenu
}) => {
  const onClick = e => {
    if (name === '' || name === null) M.toast({ html: 'Name is required' })
    else if (preparationTime === '')
      M.toast({ html: 'Preparation Time is required' })
    else addMenu()
  }

  return (
    <div className="add-menu hidden">
      <form id="inventory-form">
        <input
          type="text"
          placeholder="ชื่อ"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="เวลาเตรียมการ (นาที)"
          value={preparationTime}
          onChange={e => setPreparationTime(e.target.value)}
          required
        />

        <i
          className="medium material-icons orange-text text-darken-2 right"
          style={{ position: 'relative', bottom: '60px' }}
          onClick={onClick}
        >
          add_circle
        </i>
      </form>
    </div>
  )
}

export default MenuForm
