import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

const Home = () => {
  const [search, setSearch] = useState({ letra: "", result: [] });
  const handleOnchange = (e) => {
    setSearch({
      ...search,
      letra: e.target.value,
    });
  };
  const onClick = async (e) => {
    const letra = e.target.value;
    try {
      const result = await axios.get(
        `/iecho?text=${letra}`
      );
      let array = search.result;
      array.unshift(result.data.text);
      console.log(array);
      setSearch({
        ...search,
        result: array,
      });
    } catch (error) {
      console.log(error);
    }
    //console.log(result)
  };
  console.log(search.letra, search.result);
  return (
    <div style={{backgroundColor:"lightgray", height:"100vh"}}>
     
        <nav
          class="navbar navbar-dark bg-dark"
          style={{ justifyContent: "center" }}
        >
          <form
            class="form-inline"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <input
                style={{width:"70vh"}}
              class="form-control me-3"
              type="search"
              placeholder="Search"
              onChange={(e) => handleOnchange(e)}
              aria-label="Search"
            />
            <button
              onClick={(e) => onClick(e)}
              value={search.letra}
              type="button"
              class="btn btn-primary"
            >
              Primary
            </button>
          </form>
        </nav>
      
        <div style={{ justifyContent:"center", display:"flex" , marginTop:"40px"}}>
            <Result text={search.result}></Result>
        </div>
 
    </div>
  );
};

export default Home;
