import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({
    title,
    handleNavigation,
    isLoading
}) => {
    return (
        <View>
            <TouchableOpacity style={styles.BtnStyle} onPress={handleNavigation}>
               
                {!!isLoading? <ActivityIndicator  />: <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>{title}</Text>}
               
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    BtnStyle: {
        backgroundColor: 'blue',
        marginHorizontal: 25,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 20,
        height: 48,
        justifyContent: 'center'

    }

})