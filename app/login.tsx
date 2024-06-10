import React,{Component} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions,
    TextInput
} from 'react-native';
import { Link, Stack } from 'expo-router';



const windownWidth = Dimensions.get('window').width
const windownHeight = Dimensions.get('window').height
export default Login =() => {
    return (
        <ImageBackground style={{height:'100%', width:'100%',}} source={require('../assets/images/login.png')} resizeMode="stretch">
            <StatusBar barStyle='light-conten' />
            <SafeAreaView style={{flex:1}}>
                <View style={{height:'100%', width:'100%'}}>
                    <View style={{width:'100%',height:'20%', marginTop:0.3 * windownHeight, alignItems: 'center'}}>
                        <View style={{ width:'70%', height:30, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                            <Text style={{color:'white'}}>Email</Text>
                            <TextInput
                                 style={{height:'100%', width:'70%', borderBottomColor:'white',borderBottomWidth:1, textAlign:'right'}} 
                                 autoCapitalize='none'
                                />
                        </View>
                        <View style={{width:'70%', height:30, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', marginTop: 10}}>
                            <Text style={{color:'white'}}>Password</Text>
                            <TextInput
                                 style={{ color: 'white', height:'100%', width:'70%', borderBottomColor:'white',borderBottomWidth:1, textAlign:'right', paddingRight:30}} 
                                 autoCapitalize='none'
                                 secureTextEntry={true}
                                />
                        </View>
                    </View>

                    <View style={{width:'100%', height:'20%', marginTop:0.15*windownHeight, justifyContent: 'center', alignItems:'center'}}>
                        
                        <Link href={"../(tabs)/Trang_chu"} style={{width:'60%',height:'30%',borderColor:'white', borderWidth:1, borderRadius: 100, backgroundColor: '#18A2EB', justifyContent:'center',alignItems:'center'}} >
                            <TouchableOpacity style={{width:'100%',height:'100%', borderRadius: 100, backgroundColor: '#18A2EB', justifyContent:'center',alignItems:'center'}}>
                                    
                                <Text style={{color:'white', fontSize:20}}>Đăng nhập</Text>
                                    
                            </TouchableOpacity>
                        </Link> 
                            
                        
                        <TouchableOpacity style={{width:'60%',height:'30%',borderColor:'white', borderWidth:1, marginTop:20, borderRadius: 100, backgroundColor: '#4D33B9', justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20}}>Đăng ký</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </SafeAreaView>

        </ImageBackground>
    )
}