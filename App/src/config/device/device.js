import { PixelRatio, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const X_WIDTH = 375;
const X_HEIGHT = 812;

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;
let pixelDensity = PixelRatio.get();

export const isTablet = () => {
    let res = false;
    if ((pixelDensity < 2) && (screenWidth >= 1000 || screenHeight >= 1000)) {
        res = true;
    } else if (pixelDensity === 2 && (screenWidth >= 1920 || screenHeight >= 1920)) {
        res = true;
    } else {
        res = false;
    }
    return res || Platform.isPad;
}

export { width, height };

export const isIPhoneX = () => {

    return Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((height === X_HEIGHT && width === X_WIDTH) ||
            (width === X_WIDTH && height === X_HEIGHT));
}