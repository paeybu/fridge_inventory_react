import React, { useEffect, useState } from 'react'
import InvetoryItem from './InventoryItem'
import InventoryForm from './InventoryForm'
import M from 'materialize-css'
import { db } from '../Firebase'

const CategoryCard = () => {
  const [inventories, setInventories] = useState([])
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [priority, setPriority] = useState('1')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const invenRef = db.collection('inventories')
    await invenRef.onSnapshot(docSnapshot => {
      setInventories([])
      const docs = docSnapshot.docs
      docs.forEach(doc => {
        setInventories(prev => [
          ...prev,
          {
            id: doc.id,
            ...doc.data()
          }
        ])
      })
    })
  }

  const addInven = async category => {
    let addDoc = await db.collection('inventories').add({
      name,
      amount,
      priority: parseInt(priority),
      category: category
    })

    console.log(addDoc)

    M.toast({ html: 'เพิ่มแล้ว' })
  }

  const onClick = () => {
    const forms = document.querySelectorAll('.add-inventory')
    const forms_a = [...forms]
    forms_a.map(form => form.classList.toggle('hidden'))

    const menu_card = document.querySelector('#menu-card')
    menu_card.classList.toggle('move-down')
  }

  const deleteItem = async id => {
    db.collection('inventories')
      .doc(id)
      .delete()
    M.toast({ html: `ลบแล้ว, id: ${id}` })
  }
  return (
    <>
      <div className="card">
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab pink lighten-4">
              <a className="active grey-text text-darken-3" href="#meat">
                เนื้อสัตว์
              </a>
            </li>
            <li className="tab blue lighten-4">
              <a href="#premade">ของสำเร็จรูป</a>
            </li>
            <li className="tab green lighten-4">
              <a href="#vegetable">ผัก</a>
            </li>
            <li className="tab red lighten-4">
              <a href="#spice-herb">เครื่องเทศ</a>
            </li>
            <li className="tab yellow lighten-4">
              <a href="#fruit">ผลไม้</a>
            </li>
            <li className="tab orange lighten-4">
              <a href="#snack">ขนม</a>
            </li>
          </ul>
        </div>
        <div className="card-content grey lighten-4" id="inventory-card">
          {/* Meat */}
          <div id="meat">
            <ul>
              {inventories &&
                inventories
                  .filter(item => item.category === 'meat')
                  .map(item => (
                    <InvetoryItem
                      key={item.id}
                      item={item}
                      deleteItem={deleteItem}
                    />
                  ))}
            </ul>
            <button
              className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
              onClick={onClick}
            >
              เพิ่มรายการ
            </button>
            {/* Form */}
            <InventoryForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              addInven={addInven}
              priority={priority}
              setPriority={setPriority}
              category={'meat'}
            />
          </div>
          <div id="premade">
            <ul>
              {inventories &&
                inventories
                  .filter(item => item.category === 'premade')
                  .map(item => <InvetoryItem key={item.id} item={item} />)}
            </ul>
            <button
              className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
              onClick={onClick}
            >
              เพิ่มรายการ
            </button>
            {/* Form */}
            <InventoryForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              addInven={addInven}
              priority={priority}
              setPriority={setPriority}
              category={'premade'}
            />
          </div>
          <div id="vegetable">
            <ul>
              {inventories &&
                inventories
                  .filter(item => item.category === 'vegetable')
                  .map(item => <InvetoryItem key={item.id} item={item} />)}
            </ul>
            <button
              className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
              onClick={onClick}
            >
              เพิ่มรายการ
            </button>
            {/* Form */}
            <InventoryForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              addInven={addInven}
              priority={priority}
              setPriority={setPriority}
              category={'vegetable'}
            />
          </div>
          <div id="spice-herb">
            <ul>
              {inventories &&
                inventories
                  .filter(item => item.category === 'spice-herb')
                  .map(item => <InvetoryItem key={item.id} item={item} />)}
            </ul>
            <button
              className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
              onClick={onClick}
            >
              เพิ่มรายการ
            </button>
            {/* Form */}
            <InventoryForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              addInven={addInven}
              priority={priority}
              setPriority={setPriority}
              category={'spice-herb'}
            />
          </div>
          <div id="fruit">
            <ul>
              {inventories &&
                inventories
                  .filter(item => item.category === 'fruit')
                  .map(item => <InvetoryItem key={item.id} item={item} />)}
            </ul>
            <button
              className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
              onClick={onClick}
            >
              เพิ่มรายการ
            </button>
            {/* Form */}
            <InventoryForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              addInven={addInven}
              priority={priority}
              setPriority={setPriority}
              category={'fruit'}
            />
          </div>
          <div id="snack">
            <ul>
              {inventories &&
                inventories
                  .filter(item => item.category === 'snack')
                  .map(item => <InvetoryItem key={item.id} item={item} />)}
            </ul>
            <button
              className="btn waves-effect waves-light light-blue lighten-2 grey-text text-lighten-4"
              onClick={onClick}
            >
              เพิ่มรายการ
            </button>
            {/* Form */}
            <InventoryForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              addInven={addInven}
              priority={priority}
              setPriority={setPriority}
              category={'snack'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryCard
