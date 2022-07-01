import AsyncStorage from '@react-native-async-storage/async-storage';

const _storeData = async (name, data) => {
    try {
        await AsyncStorage.setItem(
            name, JSON.stringify(data)
        );
    } catch (error) {
        throw new Error (error)
    }
};

const _retrieveData = async (data) => {
    try {
        const value = await AsyncStorage.getItem(data);
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
        return value

    } catch (error) {
        console.log(error)
        throw new Error (error)
    }
};

export {
    _retrieveData,
    _storeData
}