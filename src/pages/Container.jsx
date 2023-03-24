import React,{useEffect} from "react";
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";

function Container() {
    return (
        <section>
            <Searchbar />
            <Movies/>
        </section>
    )
}

export default Container;