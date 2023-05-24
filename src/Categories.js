import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroyCategory } from "./store";
import { Link } from "react-router-dom";

const Categories = () => {
   const { categories, todos } = useSelector((state) => state);
   const dispatch = useDispatch();
   return (
      <ul className="categories">
         {categories.map((category) => {
            const filtered = todos.filter((todo) => todo.categoryId === category.id);
            return (
               <li key={category.id}>
                  <Link to={`/categories/${category.id}`}>
                     {category.name}({filtered.length})
                  </Link>
                  <button disabled={filtered.length} onClick={() => dispatch(destroyCategory(category))}>
                     x
                  </button>
               </li>
            );
         })}
      </ul>
   );
};

export default Categories;
