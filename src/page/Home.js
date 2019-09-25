import React from 'react'
import CategoryCard from '../components/CategoryCard'
import MenuCard from '../components/MenuCard'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="thai-hand">ของในตู้เย็น</h4>
          <div className="col s12">
            <CategoryCard />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <MenuCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
