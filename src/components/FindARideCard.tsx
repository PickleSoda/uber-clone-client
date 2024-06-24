import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { RootStackParamList } from '../navigators/RootNavigator';
import { StackParamList } from '../screens/MapScreen';
import { useAppSelector } from '../store/hooks';
import { selectTravelTimeInformation } from '../store/slices/navSlice';

type NavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<StackParamList, 'FindARideCard'>,
    NativeStackNavigationProp<RootStackParamList>
>;


const FindARideCard = () => {
    const navigation = useNavigation<NavigationProp>();
    const travelTimeInformation = useAppSelector(selectTravelTimeInformation);

    return (
        <SafeAreaView className="bg-white flex-grow">
            <View>
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('NavigateCard')}
                    className="absolute top-3 left-5 p-1 rounded-full z-10 bg-black"
                >
                    <Icon name="chevron-left" type="fontawesome" color="white" size={28} />
                </TouchableOpacity> */}
                <Text className="text-center py-5 text-xl">
                    Looking for a Driver
                </Text>
            </View>

            <View className="flex-1">

            </View>


            <View className="absolute bottom-0 left-0 right-0 bg-white p-2">
                <TouchableOpacity
                    className={`bg-black py-3 rounded-lg`}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text className="text-center text-white text-xl">Cancel Ride</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default FindARideCard;
