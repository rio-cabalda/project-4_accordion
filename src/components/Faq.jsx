import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const Faq = ({id, title,info, toggleQuestion,activeId}) => { 

    const isActivce = id === activeId; // validate if the active ID is set is equal to this id(there are 5 ids/data).
                                        // if this id of component is equal to activeId, then it will show the info or content.
 
  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button type='button' onClick={()=>toggleQuestion(id)} className='question-btn'>{isActivce? <AiOutlineMinus/>:<AiOutlinePlus/>}</button>
         </header>
         <div className={`question__wrap${isActivce ? ' show': ''}`}>
            <p className={`info${isActivce ? ' mg-bottom': ''}`} >{info}</p>
            </div>
       
       
      
    </article>
  )
}

export default Faq