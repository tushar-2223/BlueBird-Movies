import React, { useContext } from 'react'
import Contextpage from '../Contextpage';
import { HiChevronLeft } from "react-icons/hi";

function Header() {

  const { header, backgenre } = useContext(Contextpage);

  return (
    <>
      <header className={`flex  items-center ${backgenre ? 'justify-center gap-10 md:justify-between' : 'justify-center'} text-3xl md:text-4xl font-bold text-blue-300 py-3 px-5 md:px-10`}>

        {backgenre ?
          <a href='/' className='bg-gray-600 text-white p-2 rounded-full text-xl md:text-2xl'>
            <HiChevronLeft />
          </a>
          : null}

        {header}
      </header>

    </>
  )
}

export default Header