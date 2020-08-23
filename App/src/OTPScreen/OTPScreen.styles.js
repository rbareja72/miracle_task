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
    fontWeight: '600',
    color: colors.textGrey,
    marginRight: normalScale(25),
  },
  formContainer: {
    marginTop: verticalScale(16),
  },
  resendLink: {
    fontWeight: '600',
  },
  resendLinkContainer: {
    marginTop: verticalScale(20),
  },
  link: {
    fontWeight: '800',
    color: colors.textDarkGrey,
    paddingLeft: normalScale(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(100),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: normalScale(36),
  },
  subHeadContainer: {
    marginTop: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
  },
  emailText: {
    color: colors.black,
    fontSize: normalize(12),
  }
});

export default styles;
