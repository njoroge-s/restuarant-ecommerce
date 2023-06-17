import React from "react";
import meals from "../mealsdata";
export default function Homescreen(){
    return(
        <div>
            <div className="row">
                {meals.map(meals=>{
                    return <div className="col-md-4">
                        <div>
                            <meals meals={meals}/>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}