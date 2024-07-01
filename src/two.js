import React,{Component, useState} from 'react'

export default function Two(){
    const [name,setName]=useState("Frontend Reactjs");
	return(
		<div>Two
            <h1>{name}</h1>
        </div>
	)
}

