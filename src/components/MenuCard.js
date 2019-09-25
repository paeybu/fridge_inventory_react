import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MenuForm from './MenuForm'
import MenuItem from './MenuItem'
import uuid from 'uuid/v4'
import M from 'materialize-css'

const MenuCard = () => {
  const [menu, setMenu] = useState(null)
  const [name, setName] = useState('')
  const [preparationTime, setPreparationTime] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get('/menu')
    console.log(res.data)
    setMenu(res.data)
  }

  const addMenu = async () => {
    await axios.post('/menu', {
      id: uuid(),
      name: name,
      preparation_time: preparationTime
    })
    fetchData()
    setName('')
    setPreparationTime('')
    M.toast({ html: 'เพิ่มแล้ว' })
  }

  const onClick = () => {
    const form = document.querySelector('.add-menu')
    form.classList.toggle('hidden')
  }

  const deleteItem = async id => {
    await axios.delete(`/menu/${id}`)
    M.toast({ html: `ลบแล้ว, id: ${id}` })
    fetchData()
  }
  return (
    <div className="card move-down" id="menu-card">
      <div className="card-title" style={{ margin: '10px' }}>
        เมนู
      </div>
      <div className="card-content cyan lighten-4" id="menu-card">
        {/* Meat */}
        <div id="meat">
          <ul>
            {menu &&
              menu.map(item => (
                <MenuItem key={item.id} item={item} deleteItem={deleteItem} />
              ))}
          </ul>
          <button
            className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
            onClick={onClick}
          >
            เพิ่มรายการ
          </button>
          {/* Form */}
          <MenuForm
            name={name}
            setName={setName}
            preparationTime={preparationTime}
            setPreparationTime={setPreparationTime}
            addMenu={addMenu}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuCard
