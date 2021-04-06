import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    //it gives you an array of key
    let transformedIngredients = Object.keys(props.ingredients)
       .map(igKey => {
           return [...Array(props.ingredients[igKey])].map((_,i) => {
               return <BurgerIngredient 
               key = {igKey + i} //to resolve that key warning
               type = {igKey}
                />;
           });
       })//to flaten the array to get the length
       .reduce((arr,el) => {
           return arr.concat(el)
       },[]);

       if(transformedIngredients.length === 0) {
           transformedIngredients = <p>Please start filling Ingredients</p>
       }
    //We get array of strings

    //curly braces to insert some javascript logic befre returning some JSX
     return (
         <div className = {classes.Burger}>
             <BurgerIngredient type = "bread-top" />
             {transformedIngredients}
             <BurgerIngredient type = "bread-bottom" />
            
         </div>

     );
}

export default burger;