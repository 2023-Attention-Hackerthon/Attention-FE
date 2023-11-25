// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import RoutePath from "./routePath";

const BottomTab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RoutePath.MyCardTab}>
      <BottomTab.Screen
        name={RoutePath.MyCardTab}
        component={TabOneNavigator}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign size={30} name="idcard" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={RoutePath.WalletTab}
        component={TabTwoNavigator}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarIcon: ({ color }) => <SimpleLineIcons size={30} name="wallet" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={RoutePath.MyPageTab}
        component={TabTwoNavigator}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign size={30} name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} options={{ headerTitle: "Tab One Title" }} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} options={{ headerTitle: "Tab Two Title" }} />
    </TabTwoStack.Navigator>
  );
}
