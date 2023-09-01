import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
const { quey, searchPost} = useGlobalContext();

  return (
  <>
     <div className="text-center my-6">
      <h1 className="text-4xl font-medium ">Technical Tech Website</h1>
      <form >

        <div className="">
          <input className="form" type="text" placeholder="search here" value={quey}
          onChange={(e) => searchPost(e.target.value) }
          />
        </div>
      </form>
     </div>
  </>
  )
};

export default Search;
