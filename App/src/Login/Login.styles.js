import { StyleSheet } from 'react-native';
import normalize, { normalScale, verticalScale } from '../config/device/normalize';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  container: {
    paddingHorizontal: normalScale(30),
    paddingTop: verticalScale(50),
  },
  titleStyle: {
    fontSize: normalize(32),
    fontWeight: '600',
  },
  paragraphStyle: {
    color: colors.textPlaceholderGrey,
    fontSize: normalize(12),
  },
  formContainer: {
    marginTop: verticalScale(16),
  },
  linkContainer: {
    marginTop: verticalScale(14),
  },
  buttonContainer: {
    marginTop: verticalScale(60),
  },
  buttonStyle: {
    paddingVertical: verticalScale(6),
  },
});

export default styles;
