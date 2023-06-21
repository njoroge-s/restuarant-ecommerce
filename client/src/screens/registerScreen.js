import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/loading";
import Success from "../components/success";
import Error from "../components/error";

export default function registerScreen () {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    const [cpassword, setcpassword] =useState('');
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error, loading, succcess} = registerstate
    
    const dispatch = useDispatch()

    function register (){

        if(password!=cpassword)
        {
            alert("password does not match")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
     return( 

        <div>
            <div className="row justify-content-center">

                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading/>)}
                    {succcess && (<Success success='User registered successfully'/>)}
                    {error && (<Error error='Email already registered'/>)}
                    
                    <h2 className="text-center m-2" style={{fontSize: '35px'}}>Register</h2>
                    <div>
                        <input
                            required 
                            type="text" 
                            placeholder="name" 
                            className="form-control"
                            value={name}
                            onChange={(e)=>{setname(e.target.value)}}
                        />
                        <input 
                            type="text"
                            required
                            placeholder="email" 
                            className="form-control"
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                        />
                        <input 
                            type="text"
                            required
                            placeholder="password" 
                            className="form-control"
                            value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}
                        />
                        <input 
                            type="text"
                            required
                            placeholder="confirm password" 
                            className="form-control"
                            value={cpassword}
                            onChange={(e)=>{setcpassword(e.target.value)}}
                        />
                        <button onClick={register} className="btn mt-3 mb-3">REGISTER</button>
                        <br/>
                        <a style={{color:'black'}} href="/login">Click here to login</a>
                    </div>

                 </div>

            </div>

        </div>

     )
}