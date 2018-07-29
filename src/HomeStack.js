import HomeNavigator          from "./component/HomeNavigator";
import {createStackNavigator} from "react-navigation";

export default HomeStack = createStackNavigator({
    //bottom tab bar
    Homes: {
        screen: HomeNavigator,
        navigationOptions: {
            header: null  //顶部导航很多都会自己自定义，这里就为空
        }
    },
}, {
    //default
    initialRouteName: 'Homes'
});