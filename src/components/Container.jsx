import React,{useEffect} from "react";
import Movies from "./Movies";
import Searchbar from "./Searchbar";

function Container() {
    return (
        <section>
            <Searchbar />
            <Movies/>
        </section>
    )
}

export default Container;