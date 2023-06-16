import React from "react";
import mealData from "../meals";
import meals from "../components/meals";
export default function Homescreen(){
    return(
        <div>
            <div className="row">
                {meals.map(meals)}
            </div>
        </div>
    )
}