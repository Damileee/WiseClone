import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseWidth = 375; // iPhone 11/12/13 width
const baseHeight = 812;

export const scale = (size) => (width / baseWidth) * size;
export const verticalScale = (size) => (height / baseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const getResponsiveFont = () => {
  const { width } = Dimensions.get('window');
  if (width >= 428) return 40;
  if (width >= 393) return 34;
  if (width >= 375) return 26;
  return 24;
};