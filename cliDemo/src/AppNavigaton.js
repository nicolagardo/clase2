import {createStackNavigator} from "react-navigation-stack";
import {HomeScreen, SecondScreen} from "./screens/index";
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    SecondScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);