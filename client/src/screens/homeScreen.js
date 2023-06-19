import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllMeals } from "../actions/mealsAction";
import meals from "../components/meals";

export default function Homescreen(){

    const dispatch = useDispatch()

    const mealsstate = useSelector(state => state.getAllMealsReducer)

    const {meals, error, loading} = mealsstate

    useEffect(() =>{
        dispatch(getAllMeals())
    
    }, [])
    return(
        <div>
            <div className="row justify-content-center">

                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Something went wrong</h1>
                ) :(
                    meals.map((meals)=>{
                        return (
                            <div className="col-md-3 m-3" key={meals._id}>
                                <div>
                                    <meals meals={meals}/>
                            </div>
    
                        </div>
                    );
                })
            )}
            </div>
        </div>
    )
}