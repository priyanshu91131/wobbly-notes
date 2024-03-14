import React, {Component}  from 'react'
import { motion } from "framer-motion"
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import Checkbox from './Checkbox';

export default function Card(props) {
  return (
    <motion.div drag dragConstraints ={props.referance} whileDrag={{scale: 1.2}} className='relative w-48 h-60 bg-sky-800 rounded-[30px] p-3 overflow-hidden' >
    <div className='icon ml-2 text-white'><FaRegCopy  onClick={() =>{
      props.handlecopy(props.id)
    }}/></div>
      
      <p className='text-s font-semibold text-white text-center textNote overflow-y-auto max-h-48'>{props.data.desc}</p>
       {/* hover:overflow-scroll */}
      <div className= {`footer absolute left-0 bottom-0 w-full h-15`} style= {{background:props.data.colour}}  >
        <div className={`flex items-center justify-between mx-3 mb-3 mt-2`}>
          <Checkbox size={'25px'}/>
            <IoMdCloseCircle size={'25px'} onClick={() =>{
              props.handleselect(props.id)
            }} />
        </div>
      </div>
    </motion.div>
  )
}


