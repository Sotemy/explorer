import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import login from '../tools/authController';

export default function Login() {

    const [data, setData] = React.useState(
        {
            email: '',
            password: '',
        }
    );

    const onChange = (key, e) => {
        setData((prevState) => ({
            ...prevState, 
            [key]: e.nativeEvent.text,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(data)

        login(data)
    }

    return (
        <View>
            <KeyboardAvoidingView behavior='padding'>
            <TextInput
                style = {styles.input}
                returnKeyType='done'
                onChange={(e) => onChange('email', e)}
            />
            
            <TextInput
                style={styles.input}
                onChange={(e) => onChange('password', e)}
                placeholder="useless placeholder"
                returnKeyType='done'
            />
            </KeyboardAvoidingView>
            <Button onPress={(e) => onSubmit(e)} title="Submit">Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });