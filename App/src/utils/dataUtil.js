import AsyncStorage from '@react-native-community/async-storage';

const getData = async (key) => await AsyncStorage.getItem(key);

const storeData = async (key, value) => AsyncStorage.setItem(key, value);

export { getData, storeData };