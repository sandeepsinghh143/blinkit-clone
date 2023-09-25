import React from 'react'
import "../styles/Categories.css"
import Paan from "../assets/categories/paan-corner.avif"
import Slice2 from "../assets/categories/Slice-2_10.webp"
import Slice3 from "../assets/categories/Slice-3_9.avif"
import Slice4 from "../assets/categories/Slice-4_9.avif"
import Slice5 from "../assets/categories/Slice-5_4.avif"
import Slice6 from "../assets/categories/Slice-6_5.avif"
import Slice7 from "../assets/categories/Slice-7_3.avif"
import Slice8 from "../assets/categories/Slice-8_4.avif"
import Slice9 from "../assets/categories/Slice-9_3.avif"
import Slice10 from "../assets/categories/Slice-10.avif"
import Slice11 from "../assets/categories/Slice-11.avif"
import Slice12 from "../assets/categories/Slice-12.avif"
import Slice13 from "../assets/categories/Slice-13.avif"
import Slice14 from "../assets/categories/Slice-14.avif"
import Slice15 from "../assets/categories/Slice-15.avif"
import Slice16 from "../assets/categories/Slice-16.avif"
import Slice17 from "../assets/categories/Slice-17.avif"
import Slice18 from "../assets/categories/Slice-18.avif"
import Slice19 from "../assets/categories/Slice-19.avif"
import Slice20 from "../assets/categories/Slice-20.avif"
import Category from './Category'

const Categories = () => {
  return (
    <section className='categories'>
        <Category src={Paan} alt={"paan"}/>
        <Category src={Slice2} alt={"slice2"}/>
        <Category src={Slice3} alt={"slice3"}/>
        <Category src={Slice4} alt={"slice4"}/>
        <Category src={Slice5} alt={"slice5"}/>
        <Category src={Slice6} alt={"slice6"}/>
        <Category src={Slice7} alt={"slice7"}/>
        <Category src={Slice8} alt={"slice8"}/>
        <Category src={Slice9} alt={"slice9"}/>
        <Category src={Slice10} alt={"slice10"}/>
        <Category src={Slice11} alt={"slice11"}/>
        <Category src={Slice12} alt={"slice12"}/>
        <Category src={Slice13} alt={"slice13"}/>
        <Category src={Slice14} alt={"slice14"}/>
        <Category src={Slice15} alt={"slice15"}/>
        <Category src={Slice16} alt={"slice16"}/>
        <Category src={Slice17} alt={"slice17"}/>
        <Category src={Slice18} alt={"slice18"}/>
        <Category src={Slice19} alt={"slice19"}/>
        <Category src={Slice20} alt={"slice20"}/>
    </section>
  )
}

export default Categories