import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import Toast from "react-native-simple-toast";

const LoginScreen = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = React.useState();

    const Login = async () => {
        if (mobileNumber != '8074019852') {
            Toast.showWithGravity("Please enter valid mobile number", Toast.LONG, Toast.BOTTOM);
        } else {
            navigation.navigate('ConfirmPassword')
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient style={styles.container} colors={['#333', '#303030']}>
                {/* Welcome Text */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ resizeMode: 'center', height: 150, width: 150 }}
                        source={require('../assets/Logo.png')}
                    />
                </View>
                <View style={{
                    // flex:1,
                    marginTop: '30%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: 'Lato-BlackItalic',
                        }}
                    >
                        Welcome back!
                    </Text>
                    {/* Enter your number Text */}
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 24,
                            marginTop: 14,
                            fontFamily: 'Lato-Italic',
                        }}
                    >
                        Enter your number
                    </Text>
                    {/* Number Input */}
                    <View style={styles.inputTopMorph}>
                        <View style={styles.inputBottomMorph}>
                            <TextInput
                                style={styles.input}
                                maxLength={10}
                                onChangeText={(val) => setMobileNumber(val)}
                                textContentType='telephoneNumber'
                                keyboardType='phone-pad'
                                placeholderTextColor={'#8c8c8c'}
                                placeholder={'Enter mobile number'}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Login()} style={styles.buttonOpacity}>
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >
                        <Text
                        onPress={()=>navigation.navigate('RegisterUser')}
                            style={{
                                color: '#fafafa',
                                fontSize: 18,
                                fontFamily: 'Lato-Italic',
                                marginRight: '45%',
                            }}
                        >
                            New User?
                        </Text>
                        <Text
                            style={{
                                color: '#fafafa',
                                fontSize: 18,
                                fontFamily: 'Lato-Italic',
                            }}
                            onPress={()=>navigation.navigate('ForgotPasswordScreen')}
                        >
                            Forgot Password?
                        </Text>
                    </View>
                </View>

            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inputTopMorph: {
        width: '100%',
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#333',
        elevation: 10,
    },
    inputBottomMorph: {
        backgroundColor: '#333',
        borderRadius: 10,
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#414141',
    },
    input: {
        width: '100%',
        height: 50,
        fontSize: 18,
        paddingHorizontal: 10,
        fontFamily: 'Lato-Italic',
        color: '#8c8c8c',
    },
    buttonOpacity: {
        width: '100%',
        height: 50,
        marginTop: 22,
        borderRadius: 10,
        backgroundColor: '#2e2e2e',
        elevation: 10,
    },
    buttonView: {
        backgroundColor: '#2e2e2e',
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Italic',
        fontSize: 20,
        color: '#fafafa',
        marginVertical: 10,
        textAlign: 'center',
    },
    iconTouchable: {
        borderRadius: 10,
        backgroundColor: '#2e2e2e',
        elevation: 5,
        shadowOffset: {
            width: -6,
            height: -6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#1d1d1d',
        marginHorizontal: 10,
    },
    iconView: {
        backgroundColor: '#2e2e2e',
        borderRadius: 10,
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#3f3f3f',
        padding: 14,
    },
});

export default LoginScreen;