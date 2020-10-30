import React from 'react';
import './App.css';

const Recipe = ({title, calories, image, ingredients}) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className="recipe-container">
            <img className="recipe-img" src={image} alt=" "/>

            <div className="recipe-text-container">
                <h1 className="recipe-title">{title}</h1>
                <p className="recipe-calories">{numberWithCommas(Math.round(calories))} calories</p>

                <ol>
                    {ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Recipe;
