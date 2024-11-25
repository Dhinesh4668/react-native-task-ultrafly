import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'
import { Todo } from '../navigation/types'
import { useNavigation } from "@react-navigation/native";



const CreateScreen = (): React.JSX.Element => {
    const navigation = useNavigation();
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [selectedColor, setSelectedColor] = React.useState('');

    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

    const handleCreate = () => {
        if (!title.trim() || !description.trim()) return;

        const newTodo: Todo = {
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            color: selectedColor || colors[0]
        };

        // Alert.alert(newTodo);
        navigation.navigate('Home', { newTodo })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Create New Todo</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                    placeholderTextColor="#666"
                />

                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    numberOfLines={4}
                    placeholderTextColor="#666"
                />

                <Text style={styles.colorLabel}>Select Color:</Text>
                <View style={styles.colorContainer}>
                    {colors.map((color) => (
                        <TouchableOpacity
                            key={color}
                            style={[
                                styles.colorOption,
                                { backgroundColor: color },
                                selectedColor === color && styles.selectedColor
                            ]}
                            onPress={() => setSelectedColor(color)}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={[
                        styles.createButton,
                        (!title.trim() || !description.trim()) && styles.disabledButton
                    ]}
                    onPress={handleCreate}
                    disabled={!title.trim() || !description.trim()}
                >
                    <Text style={styles.createButtonText}>Create Todo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    closeButton: {
        padding: 8
    },
    closeButtonText: {
        fontSize: 20,
        color: '#666'
    },
    form: {
        gap: 16
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#000'
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top'
    },
    colorLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 8
    },
    colorContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24
    },
    colorOption: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'transparent'
    },
    selectedColor: {
        borderColor: '#000'
    },
    createButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center'
    },
    disabledButton: {
        backgroundColor: '#ccc'
    },
    createButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
})
