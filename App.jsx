import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect, } from 'react';
import ButtonNumber from './components/ButtonNumber';

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operator, setOperator] = useState("")
  const [stringCalculation, setStringCalculation] = useState("0")

  let numbers = []

  for(let i = 0; i <= 9; i++){
    numbers.push(i)
  }

  function logical(n) {
    if(operator == ""){
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()))
      setStringCalculation(parseInt(firstNumber.toString() + n.toString()))
    }

    let operators = ["/", "*", "+", "-"]

    if(operators.includes(n) && secondNumber == 0){
      setStringCalculation(firstNumber.toString() + n)
      setOperator(n)
    }

    if(operator != ""){
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()))
      setStringCalculation(firstNumber+operator+parseInt(secondNumber.toString() + n.toString()))
    }

    if(n == "="){
      let resultado = 0
      if(operator == "+"){
        result = firstNumber + secondNumber

      } else if (operator == "-") {
        result = firstNumber - secondNumber

      } else if (operator == "/") {
        result = firstNumber / secondNumber

      } else if (operator == "*") {
        result = firstNumber * secondNumber

      }

      setStringCalculation(result)
      setOperator("")
      setFirstNumber(result)
      setSecondNumber(0)
    }

    if(n == "C"){
      setFirstNumber(0)
      setSecondNumber(0)
      setOperator("")
      setStringCalculation("0")
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.top}>
        <Text style={{fontSize:24, color:'white'}}>{stringCalculation}</Text>
      </View>
      <View style={{flexDirection:'row', height: '16.6%', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => logical("+")}>
          <Text style={styles.textButtonNumber}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => logical("-")}>
          <Text style={styles.textButtonNumber}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => logical("/")}>
          <Text style={styles.textButtonNumber}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => logical("*")}>
          <Text style={styles.textButtonNumber}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => logical("=")}>
          <Text style={styles.textButtonNumber}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', flexWrap:'wrap', borderTopColor:'black', borderTopWidth: 2, height:'66.8%'}}> 
        <ButtonNumber number={"C"} logical={logical} />
        {
          numbers.map(number => {
            return(<ButtonNumber number={number} logical={logical} key={number} />)
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'black'
  },
  top: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20
  },
  buttonNumber: {
    width:'20%',
    backgroundColor:'rgb(20, 20, 20)',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  textButtonNumber: {
    fontSize:24,
    color:'white',
  }
});
