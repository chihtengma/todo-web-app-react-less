import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Search = () => {
   const navigate = useNavigate();
   const { term } = useParams();
   const location = useLocation();

   const search = (ev) => {
      if (ev.target.value.trim()) {
         navigate(`/search/${ev.target.value}`);
      } else {
         navigate("/");
      }
   };

   if (location.pathname === "/create") {
      return null;
   }
   return (
      <div className="search-box">
         <input value={term ? term : ""} placeholder="Filter" onChange={search} />
      </div>
   );
};

export default Search;
