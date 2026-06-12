import {useState} from 'react'
import {View,Text, Button,Alert, TextInput} from 'react-native';

//Arrow function, jsx or component, function that returns something
const App = ()=> {
const [name, setName] = useState('Naomi')
const[count, setCount] = useState(0)

const handlePress= (props)=> {
  console.log (props)
Alert.alert('Hello', props)
}

const handleAdd = ()=> {
  setCount (count+1)
}
const handleSubtract = ()=> {
  setCount (count-2)
}
  return(
    <View style={{flex:1}}> 
    <Text>{count}</Text>
    <Button title='+' onPress={handleAdd} />
      <Button title='-' onPress={handleSubtract} />


    {/*<Text>Welcome, Naomi.</Text>
    <Button title='Click me' onPress={()=>{handlePress('Click me')} } />  
   <TextInput style={{ backgroundColor: 'white', height:40, width: '100%'}}value={name} onChangeText={(text)=>setName(text)}/>
    <Button title='Submit' onPress={()=> {handlePress(name)}}/>*/}

    </View>
)
}  
export default App; // first component

  
