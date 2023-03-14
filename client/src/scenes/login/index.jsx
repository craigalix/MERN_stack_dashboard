import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
// import { DataGrid } from "@mui/x-data-grid";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useGetAllUserQuery } from "state/api";
import { margin } from "@mui/system";

const Login = () => {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const { data, isLoading } = useGetAllUserQuery();

    const [name,setUserName]=useState('');
    const [password,setPassword]=useState('');

    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //     let path = `../signup`; 
    //     navigate(path);
    // }

    if (!data || isLoading) return "Loading...";

    console.log("data", data);

    const newUserSignUp = () => {

    }

    const handleSubmit = (_name,_password,data) => {
        // NEED TO MAKE THIS GO ON SUBMIT ONLY. currently will keep updating onChange.
        console.log("HANDLE SUBMIT HERE");
        console.log("HELLO" + _name, _password);
        data.map((row) => {
            console.log(name);
            if(_name == row.name && _password == row.password){
                window.location.replace('http://localhost:3000/dashboard');
            }
            else {
                console.log("USER NOT FOUND @@@@");
            }
        })
        // window.location.replace('http://localhost:3000/dashboard');
    };

    return (
        <Box m="1.5rem 2.5rem">
            <FlexBetween>
                <Header title="Login Page" subtitle="Welcome back!" />
            </FlexBetween>
            <Box m="1.5rem">
                <form submit={handleSubmit(name,password,data)}>
                    <div>
                        <h1>Username: </h1>
                        <input type="name" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Name" name="" id="" />
                    </div>
                    <div>
                        <h1>Password: </h1>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />
                    </div>
                <input type="submit" style={{backgroundColor: "Gold" , margin: "1.5rem 0rem", borderRadius: "15px"}}/>
                </form>

                <div>
                    <h1>Or become a new member:</h1>
                    <Button sx={{color: "Gold"}} onClick={newUserSignUp}>Sign Up</Button>
                </div>
            </Box>
        </Box>
    )

}

export default Login;