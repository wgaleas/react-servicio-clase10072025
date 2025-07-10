
import { useEffect, useState } from "react";
import { getPersonajes } from "../lib/rickyMortin";
import { CharacterCard } from "./CharacterCard";
import { ScrollView } from "react-native-web";

export function Main(){

    const[personajes, setPersonajes]=useState([]);
    useEffect(()=>{
    getPersonajes().then((data)=>{
        setPersonajes(data);
        console.log("personajes:",data)
    })

    },[]);


    return(
        <ScrollView>
        { personajes.map((character) => (
                
                <CharacterCard character= {character}
                key={character.id}
                />
                
        
              ))}

        </ScrollView>
    )
}

