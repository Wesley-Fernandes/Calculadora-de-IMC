import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button, Pressable} from 'react-native'
import IMC from './Imc'

export default function Form() {
    const [weigh, setWeigh] = useState(null);
    const [height, setHeight] = useState(null);
    const [result, setResult] = useState(null);
    const [about, setAbout] = useState('Preencha todos os campos!');

    function MakeImc(){
        if(!weigh){
            setAbout('Precisa especificar o peso!')
            return
        }

        if(!height){
            setAbout('Precisa especificar a altura!')
            return
        }
        setAbout('O seu IMC é:')
        const calc = (weigh / (height * height)).toFixed(2)
        setResult(calc)
    }
  return (
    <View style={styles.window}>
        <View>
            <Text style={styles.text}>Altura:</Text>
            <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder="Exemplo: 1.80"
            onChangeText={setHeight}
            />


            <Text style={styles.text}>Peso:</Text>
            <TextInput
            keyboardType='numeric'
            placeholder='Exemplo: 80'
            style={styles.input}
            onChangeText={setWeigh}
            />

            
            <Pressable style={styles.button}  onPress={()=>{MakeImc()}}>
                <Text style={styles.textButton}>Calcular</Text>
            </Pressable>
        </View>

        <IMC Result={result} About={about}/>
    </View>
  )
}

const styles = StyleSheet.create({
    window:{
        flex: 1
    },
    input:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 4
    },
    text:{
        fontWeight:'bold',
        fontSize: 25,
        marginTop: 5,
        marginBottom: 5

    },
    button: {
        padding: 5,
        backgroundColor: 'blue',
        marginTop: 10,
        borderRadius: 5,
        color: 'white'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    }
})