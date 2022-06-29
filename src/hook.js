import React,{useState} from "react";


function Hook(){
    //Declara una nueva varible de estado,la cual llamaremos "count"
    const[count,setCount]=useState(0);


    return(
        <div>
            <h3>Variable de estado</h3>

            <p>Contador de click {count} </p>
            <button onClick={()=> setCount(count+1)}>Click</button>
            <button onClick={()=>setCount(count===0)}>Reiniciar</button>
        </div>


    )
}

export default Hook;