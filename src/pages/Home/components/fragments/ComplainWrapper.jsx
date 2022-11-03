import React from 'react'

const ComplainWrapper = ({image, title, click}) => {
  return (
    <section onClick={click} className='shadow-compain-item cursor-pointer active:scale-50 transition-all duration-500 rounded-md p-8 flex items-center flex-col gap-6 justify-center'>
      <img src={image} alt={title} />
      <h6 className='text-sm md:text-base'>{title}</h6>
    </section>
  )
}

export default ComplainWrapper