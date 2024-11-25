import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CreateScreen from "../CreateScreen/CreateScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNavigation = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen name="Home" component={HomeScreen} />
            <TabNavigation.Screen name="Create" component={CreateScreen} />
        </TabNavigation.Navigator>
    )
}


export default BottomTabNavigation;