// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Svg, { Path } from "react-native-svg";
import TabTwoScreen from "../screens/TabTwoScreen";
import RoutePath from "./routePath";
import MyCardTabNavigator from "./MyCardTabNavigator";
import MyWalletTabNavigator from "./MyWalletTabNavigator";
import {
  CardOff,
  CardOn,
  MyOff,
  MyOn,
  WalletOn,
  WalletOff,
} from "../components/icons/BottomTabIcon";

const BottomTab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RoutePath.MyCardTab}>
      <BottomTab.Screen
        name={RoutePath.MyCardTab}
        component={MyCardTabNavigator}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (focused ? <CardOn /> : <CardOff />),
        }}
      />
      <BottomTab.Screen
        name={RoutePath.WalletTab}
        component={MyWalletTabNavigator}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (focused ? <WalletOn /> : <WalletOff />),
        }}
      />
      <BottomTab.Screen
        name={RoutePath.MyPageTab}
        component={TabTwoNavigator}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (focused ? <MyOn /> : <MyOff />),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
