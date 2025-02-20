import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from './Auth'

export default function RequiredAuth(props) {
    const auth=useAuth()
    if(auth.user){
        return(<>{props.children}</>)
    }
    else{
        return<Navigate to='/login'/>
    }
}
