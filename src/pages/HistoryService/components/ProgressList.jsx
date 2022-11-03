import React from 'react'

const ProgressList = () => {
  return (
    <div className='flex pl-4 gap-3 flex-row text-gray-400 overflow-x-scroll no-scrollbar w-full flex-nowrap'>
      <div className="cursor-pointer whitespace-nowrap border border-primary text-primary rounded-full p-1 px-3">Semua</div>
      <div className="cursor-pointer whitespace-nowrap border rounded-full p-1 px-3">Menunggu</div>
      <div className="cursor-pointer whitespace-nowrap border rounded-full p-1 px-3">Dalam Konsultasi</div>
      <div className="cursor-pointer whitespace-nowrap border rounded-full p-1 px-3">Ditolak</div>
    </div>
  )
}

export default ProgressList