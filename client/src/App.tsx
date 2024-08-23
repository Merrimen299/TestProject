import {useEffect, useState} from 'react'
import {Router} from "./router/router";
import * as React from "react";
import {RouterProvider} from "react-router-dom";
import {useAppDispatch} from "./store/hooks";
import {getToken} from "./helpers/localstorage.helper";
import {AuthService} from "./services/auth.service";
import {login, logout} from "./store/user/userSlice"

function App() {
  const dispatch = useAppDispatch()

  const checkAuth = async () =>{
    const token = getToken()
    try {
      if (token){
        const data = await AuthService.getProfile()
        if (data){
          dispatch(login(data))
        }else {
          dispatch(logout())
        }
      }
    }catch (error){
      console.log(error)
    }
  }
  useEffect(() => {
    checkAuth()
  }, [])

  return <RouterProvider router={Router}/>
}

export default App
