import { width, height } from './device';
import { Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

const orientation = screenHeight > screenWidth ? 'PORTRAIT' : 'LANDSCAPE';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = (orientation === 'PORTRAIT') ? 320 : 568;
const guidelineBaseHeight = (orientation === 'PORTRAIT') ? 568 : 320;

const normalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (normalScale(size) - size) * factor;

function normalize(size, factor = 0.5) {
    return size + (normalScale(size) - size) * factor;
}

export default normalize;
export { normalScale, verticalScale, moderateScale };
