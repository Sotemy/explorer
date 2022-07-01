import { 
    View, 
    Button, 
    StyleSheet, 
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import { TextInput } from "@react-native-material/core";
import { useState } from 'react'


import login from '../tools/authController';

export default function Login() {

    const [data, setData] = useState(
        {
            email: '',
            password: '',
        }
    );

    const onChange = (key, e) => {
        setData((prevState) => ({
            ...prevState, 
            [key]: e,
        }))
        console.log(e)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(data)

        login(data)
    }

    return (
        <View>
            <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
            <TextInput
                style = { styles.input }
                label="E-Mail"
                value={data.email}
                onChangeText = {(text) => onChange('email', text)}
            />
            
            <TextInput
                style = { styles.input }
                label="Password"
                value={data.password}
                onChangeText={(text) => onChange('password', text)}
            />
        </KeyboardAvoidingView>
            <Button style={styles.input} onPress={(e) => onSubmit(e)} title="Submit">Submit</Button>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      margin: 6,
      padding: 10,
    },
  });