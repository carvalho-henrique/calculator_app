import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonNumber({number, logical}) {
    return (
        <View style={{backgroundColor:'black', borderColor:'white', borderWidth: 2, width: '33.3%', height: '25%'}}>
            <TouchableOpacity onPress={() => logical(number)} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize:24, color:'white'}}>{number}</Text>
            </TouchableOpacity>
        </View>
    )
}