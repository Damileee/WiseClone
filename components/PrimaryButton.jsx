import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PrimaryButton({
  title,
  onPress,
  backgroundColor = '#9FE870',
  color = '#000',
  border = false,
  width = '100%',
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: border ? 'transparent' : backgroundColor,
          borderWidth: border ? 1.5 : 0,
          borderColor: backgroundColor,
          width, // Apply dynamic width prop here
        },
      ]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    alignSelf: 'center', // Keeps it centered even if width is < 100%
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});