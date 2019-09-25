import React from 'react'

const MenuItem = ({ item, deleteItem }) => {
  const formatTime = () => {
    const time = item.preparation_time
    if (time < 60) return `${time} นาที`
    else {
      const hours = Math.floor(time / 60)
      const mins = time % 60
      if (mins !== 0) {
        return `${hours} ชั่วโมง ${mins} นาที`
      } else {
        return `${hours} ชั่วโมง`
      }
    }
  }

  const time = formatTime()

  return (
    <>
      <li className="clearfix">
        <span>
          {item.name} : {time}
        </span>
        <a
          href="#"
          className="right"
          onClick={() => {
            if (window.confirm('คุณต้องการลบรายการนี้ไหม?')) deleteItem(item.id)
          }}
        >
          <i className="material-icons red-text text-darken-2">remove_circle</i>
        </a>
      </li>
    </>
  )
}

export default MenuItem
