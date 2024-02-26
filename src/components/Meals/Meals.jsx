import React from 'react'
import SearchMeal from '../SearchMeal'
import MealItem from './MealItem'

const Meals = () => {
  return (
    <div>
      <SearchMeal />
      <div>
        <MealItem />
      </div>
    </div>
  )
}

export default Meals