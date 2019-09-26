import React, { useEffect, useState } from 'react'
import MenuForm from './MenuForm'
import MenuItem from './MenuItem'
import M from 'materialize-css'
import { db } from '../Firebase'

const MenuCard = () => {
  const [menu, setMenu] = useState(null)
  const [name, setName] = useState('')
  const [preparationTime, setPreparationTime] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const invenRef = db.collection('menus')
    await invenRef.onSnapshot(docSnapshot => {
      setMenu([])
      const docs = docSnapshot.docs
      docs.forEach(doc => {
        setMenu(prev => [
          ...prev,
          {
            id: doc.id,
            ...doc.data()
          }
        ])
      })
    })
  }

  const addMenu = async () => {
    let addDoc = await db.collection('menus').add({
      name,
      preparation_time: preparationTime
    })

    setName('')
    setPreparationTime('')

    M.toast({ html: `เพิ่มแล้ว ${addDoc.id}` })
  }

  const onClick = () => {
    const form = document.querySelector('.add-menu')
    form.classList.toggle('hidden')
  }

  const deleteItem = async id => {
    db.collection('menus')
      .doc(id)
      .delete()
    M.toast({ html: `ลบแล้ว, id: ${id}` })
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
