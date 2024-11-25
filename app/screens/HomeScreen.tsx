import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp, Todo } from '../navigation/types'
import { useRoute, RouteProp } from '@react-navigation/native'
import type { RootStackParamList } from '../navigation/types'

const HomeScreen = ({ navigation }: { navigation: NavigationProp }): React.JSX.Element => {
    const route = useRoute<RouteProp<RootStackParamList, 'List'>>();
    const [todos, setTodos] = React.useState<Todo[]>([
        {
            id: '1',
            title: 'Sample Todo',
            description: 'This is a sample todo item',
            color: '#4ECDC4'
        }
    ]);

    React.useEffect(() => {
        if (route.params?.newTodo) {
            console.log(route.params?.newTodo)
            setTodos(currentTodos => [route.params.newTodo!, ...currentTodos]);
        }
    }, [route.params?.newTodo]);

    const renderTodoItem = ({ item }: { item: Todo }) => (
        <TouchableOpacity
            style={[styles.todoItem, { backgroundColor: item.color + '20' }]}
            onPress={() => { }}
        >
            <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
            <View style={styles.todoContent}>
                <Text style={styles.todoTitle}>{item.title}</Text>
                <Text style={styles.todoDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Todos</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('Create')}
                >
                    <Text style={styles.addButtonText}>+ Add Todo</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={todos}
                renderItem={renderTodoItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default HomeScreen

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
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '600'
    },
    listContainer: {
        gap: 12
    },
    todoItem: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center'
    },
    colorIndicator: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 12
    },
    todoContent: {
        flex: 1
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4
    },
    todoDescription: {
        fontSize: 14,
        color: '#666'
    }
})
