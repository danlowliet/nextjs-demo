import Link from "next/link";

import React from 'react'

//to loop over the object retrieved from the api call
const DrinkList = ({drinks}) => {
  return (
    <ul className="menu menu-vertical pl-0">
        {drinks.map((drink)=> (
            <li key={drink.idDrink}>
                <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">
                    {drink.strDrink}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default DrinkList
