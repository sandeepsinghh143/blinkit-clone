import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Items.css"
import Card from './Card'
import dahi from '../assets/items/dahi.avif'
import eggs from '../assets/items/eggs.avif'
import paneer from '../assets/items/paneer.avif'
import milkmaid from '../assets/items/milkmaid.avif'
import bread from '../assets/items/bread.avif'
import butter from '../assets/items/butter.avif'
import brownbread from '../assets/items/brownbread.avif'
import amuldahi from '../assets/items/amuldahi.avif'

const Items = () => {
  return (
    <section className='items'>
        <div className="title">
            <div className="category-name">Daily, Bread & Eggs</div>
            <Link to="/products" className="see-all">see all</Link>
        </div>
        <div className="all-items">
            <Card src={dahi} alt={"dahi"} title={"Mother Dairy Classic Curd"} weight={"400 g"} price={34}/>
            <Card src={eggs} alt={"eggs"} title={"Table White Eggs (6 pieces)"} weight={"6 pieces"} price={55}/>
            <Card src={paneer} alt={"paneer"} title={"Mother Dairy Paneer"} weight={"200 g"} price={95}/>
            <Card src={milkmaid} alt={"milkmaid"} title={"Nestle Milkmaid Sweetened Condensed Milk"} weight={"380 g"} price={144}/>
            <Card src={bread} alt={"bread"} title={"Harvest Gold White Bread"} weight={"700 g"} price={50}/>
            <Card src={butter} alt={"butter"} title={"Amul Salted Butter"} weight={"500 g"} price={285}/>
            <Card src={brownbread} alt={"brownbread"} title={"Harvest Gold Hearty Brown Bread"} weight={"400 g"} price={45}/>
            <Card src={amuldahi} alt={"amuldahi"} title={"Amul Masti Curd"} weight={"400 g"} price={34}/>
        </div>
    </section>
  )
}

export default Items