import * as React                                  from "react";
import { View} from "react-native";
import Color from '../ui/Color'

type Props={}
type State={}

class SpaceView extends React.Component<Props,State>{
    render(){
        return(
            <View style={{height:14,backgroundColor:Color.paper}} />
        )
    }
}

export default SpaceView