import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface loginProps {
    email: string;
    pass: string;
}

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // Dummy login - no validation
        navigation.replace('List');
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ultra Fly Solution Pvt Ltd</Text>
                <Text style={styles.subtitle}>Todo App Task</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Button title='Login' onPress={handleLogin} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 8
    },
    formContainer: {
        gap: 16
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16
    }
})
