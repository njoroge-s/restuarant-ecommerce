import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Meals from "../components/Meals"
import {getAllMeals} from "../actions/mealsAction";
import Loading from "../components/loading";
import Error from "../components/error";


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
                    <Loading/>
                ) : error ? (
                    <Error error='Something went wrong'/>
                ) :(
                    meals.map((meals)=>{
                        return (
                            <div className="col-md-3 m-3" key={meals._id}>
                                <div>
                                    <Meals meals={meals}/>
                            </div>
    
                        </div>
                    );
                })
            )}
            </div>
        </div>
    )
}