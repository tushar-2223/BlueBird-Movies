import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from './Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import { Pagebtn } from './Pagebtn';

function Upcoming() {

  const { loader,setPage, page, fetchUpcoming, upcoming } = useContext(Contextpage);
    
    useEffect(() => {
        fetchUpcoming();
    }, [page])


  return (
      <>
        <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
            <Header />
            <motion.div
                layout
                className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
                <AnimatePresence>
                    {
                        loader ?  <span className="loader m-10"></span>:
                            <>
                                {upcoming.map((upc) => (
                                    <Moviecard key={upc.id} movie={upc} />
                                ))}
                            </>
                    }
                </AnimatePresence>
            </motion.div>
            <Pagebtn/>
            
        </div>
      </>
  )
}

export default Upcoming