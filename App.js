import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getPersonajes } from './lib/rickyMortin';
import { SafeAreaView } from 'react-native-web';
import Logo from './components/Logo';
import { CharacterCard } from './components/CharacterCard';



export default function App() {
  
  const[personajes, setPersonajes]=useState([]);
useEffect(()=>{
  getPersonajes().then((data)=>{
    setPersonajes(data);
    console.log("personajes:",data)
  })

},[]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Logo style={styles.logo}/>
      <ScrollView>
      {personajes.map((character) => (
        
        <CharacterCard character= {character}/>
        

      ))}
      
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#e6f0fa', // fondo general azul muy claro
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },

  card: {
    backgroundColor: '#ffffff', // tarjeta blanca
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a0c4ff', // borde azul claro
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003366', // azul oscuro
  },

  species: {
    fontSize: 16,
    color: '#336699', // azul medio
  },

  status: {
    fontSize: 16,
    color: '#336699',
  },

  gender: {
    fontSize: 16,
    color: '#336699',
  },

  logo: {
    backgroundColor: '#003366', // azul oscuro
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

