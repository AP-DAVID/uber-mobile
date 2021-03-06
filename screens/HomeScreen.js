import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/navOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import  { GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';



const HomeScreen = () => {
    const dispatch = useDispatch();
    


    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>

                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs',
                    }}
                />

                <GooglePlacesAutocomplete
                    
                    debounce = {400}
                    styles={{
                        container: {
                            flex : 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    returnKeyType = {"search"}
                    onPress={(data, details = null) => {
                        
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description : data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    placeholder="Where from"
                    nearbyPlacesAPI = "GooglePlacesSearch"
                    enablePoweredByContainer={false}
                    minLength = {2}
                    fetchDetails = {true}
                    query={{
                        key : 'AIzaSyBk6Ns3KbHSnlzvjs_pVPRCb0uaKLWIboM',
                        language: "en"
                    }}
                />

             <NavOptions />
             <NavFavourites />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color : "blue",
        
    }
})
