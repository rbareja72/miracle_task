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
  subHeading: {
    color: colors.textDarkGrey,
  },
  formContainer: {
    marginTop: verticalScale(16),
  },
  link: {
    fontWeight: '800',
    color: colors.textDarkGrey,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(60),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: normalScale(26),
  },
  subHeadContainer: {
    marginTop: verticalScale(20),
  },

});

export default styles;
