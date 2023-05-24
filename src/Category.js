import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { destroyTodo } from "./store";

const Category = () => {
   const dispatch = useDispatch();
   const { todos } = useSelector((state) => state);
   const { id } = useParams();

   const filteredTodos = todos.filter((todo) => todo.categoryId === +id);

   return (
      <div className="category">
         {filteredTodos.length > 0 ? (
            <ul>
               {filteredTodos.map((todo) => (
                  <li key={todo.id}>
                     <Link to={`/${todo.id}`}>{todo.name}</Link>
                     <button
                        onClick={() => {
                           dispatch(destroyTodo(todo));
                        }}>
                        x
                     </button>
                  </li>
               ))}
            </ul>
         ) : (
            <p>No todos found for this category.</p>
         )}
      </div>
   );
};

export default Category;
