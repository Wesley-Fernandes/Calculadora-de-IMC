import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function IMC({Result, About}) {
    const [info, setInfo] = useState('')
    useEffect(()=>{
        if(Result<18.5){
            setInfo('De acordo com a Organização Mundial da Saúde, seu IMC é considerado em estado de magreza para a sua altura.')
            return
        }

        if(Result>=18.5 && Result<=24.9){
            setInfo('De acordo com a Organização Mundial da Saúde, seu IMC é considerado em estado normal para a sua altura.')
            return
        }

        if(Result>=25 && Result<=29.9){
            setInfo('De acordo com a Organização Mundial da Saúde, seu IMC é considerado em estado de sobrepeso para a sua altura.')
            return
        }

        if(Result>=30 && Result<=34,9){
            setInfo('De acordo com a Organização Mundial da Saúde, seu IMC é considerado em estado de obesidade nivel 1 para a sua altura.')
            return
        }

        if(Result>=35 && Result<=39,9){
            setInfo('De acordo com a Organização Mundial da Saúde, seu IMC é considerado em estado de obesidade nivel 2  para a sua altura.')
            return
        }

        if(Result>=40){
            setInfo('De acordo com a Organização Mundial da Saúde, seu IMC é considerado em estado de obesidade nivel 3 para a sua altura.')
            return
        }
    }, [Result])

  return (
    <View>
        <Text style={style.about}>{About}</Text>
        {Result &&(
            <>
                <Text style={style.result}>{Number(Result)}</Text>
                <Text style={style.info}>{info}</Text>
            </>
        )}
    </View>
  )
}

const style = StyleSheet.create({
    about:{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    result:{
        fontSize: 60,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    info:{
        fontSize: 10,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: 'red'
    }
})