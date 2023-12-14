import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

export const ShopCategory = (props) => {
    const {data} = useContext(ShopContext)
    return (
        <div>ShopCategory</div>
    )
}
