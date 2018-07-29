import Tab from "./component/Tab";
import Positioning from "./component/Positioning";
import Jump from "./component/Jump";
import {createStackNavigator} from "react-navigation";
import login from "./component/login";

export default HomeStack = createStackNavigator({
    //底部导航页面
    Homes: {
        screen: Tab,
        navigationOptions: {
            header: null  //顶部导航很多都会自己自定义，这里就为空
        }
    },
    //登录页面
    login: {
        screen: login,
    },
    //定位
    Positioning: {
        screen: Positioning,
        navigationOptions: {
            header: null  //顶部导航很多都会自己自定义，这里就为空
        }
    },
    //测试跳页的页面
    Jump: {
        screen: Jump,
        navigationOptions: {
            title: '选择定位'
        }

    }
}, {
    //默认出现的首页页面
    initialRouteName: 'Homes'
});