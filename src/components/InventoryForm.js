import React from 'react'
import M from 'materialize-css'

const InventoryForm = ({
  name,
  setName,
  amount,
  setAmount,
  addInven,
  priority,
  setPriority,
  category
}) => {
  const onChange = e => {
    setPriority(e.target.value)
  }

  const onClick = e => {
    if (name === '' || name === null) M.toast({ html: 'Name is required' })
    else if (amount === '' || amount === '')
      M.toast({ html: 'Amount is required' })
    else addInven(category)
  }

  return (
    <div className="add-inventory hidden">
      <form id="inventory-form">
        <input
          type="text"
          placeholder="ชื่อ"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="จำนวน"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <p>
          <label>
            <input
              className="with-gap"
              value="1"
              type="radio"
              checked={priority === '1'}
              onChange={onChange}
            />
            <span className="red-text">ใกล้หมดอายุ (1-2 วัน)</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              value="2"
              type="radio"
              checked={priority === '2'}
              onChange={onChange}
            />
            <span className="orange-text">ปานกลาง (3-5 วัน)</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              value="3"
              type="radio"
              checked={priority === '3'}
              onChange={onChange}
            />
            <span className="green-text">เก็บได้อีกนาน (7 วัน +)</span>
          </label>
        </p>
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

export default InventoryForm
