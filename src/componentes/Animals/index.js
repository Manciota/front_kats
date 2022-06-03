import { useState, useEffect } from "react"


export default function Animals(){

const [pets, setPets] = useState([])
const fetchPets = async () => {
    try {
        const response = await fetch("https://miakhats.herokuapp.com/pets/")
        const json = await response.json()
        
        setPets(json)

    }catch{

    }


}
useEffect(( ) => {
    fetchPets()
},[])


    return(
        <>
        <h1>
           hhhhh
        </h1>
        {pets.map(pet => (
            <div key={pet.id}>
        <h2> {pet.name}</h2>
        <img src={pet.image}></img>
        </div>
        ))}
        </>
    )
}