import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Todo {
    id: string;
    title: string;
    description: string;
    color: string;
}

export type RootStackParamList = {
    login: undefined;
    List: { newTodo?: Todo };
    Create: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
