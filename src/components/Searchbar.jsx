import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet';
import Contextpage from '../Contextpage';

function Searchbar() {

  const { filteredGenre, fetchSearch, setBackGenre, setGenres } = useContext(Contextpage);
  const [value, setValue] = useState("");

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();

      if (query === "") {
        filteredGenre();
      } else {
        fetchSearch(query);
        setGenres([]);
        setBackGenre(true);

      }
      setValue("");
    }
  };

  return (
    <>
    <Helmet>
        <title>BlueBird Movies</title>
    </Helmet>

    <div className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[10rem] md:h-[12rem]">
      <div className='h-full w-full bg-black/30 flex justify-center items-center'>
        <input
          type="search"
          name="searchpanel"
          id="searchpanel"
          placeholder='Search movie'
          className='p-3 w-full mx-10 md:w-[40rem]  rounded-xl outline-none'
          onKeyDown={(e) => onKeyUp(e)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      </div>
      </>
  )
}

export default Searchbar