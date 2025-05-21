import { Image, useColorScheme } from 'react-native'

// images
import DarkWorldImg from '../assets/img/darkWorld.jpeg'
import LightWorldImg from '../assets/img/lightWorld.jpeg'

const ThemedWorldImg = ({ ...props }) => {
  const colorScheme = useColorScheme()
  
  const image = colorScheme === 'dark' ? DarkWorldImg : LightWorldImg

  return (
    <Image source={image} {...props}/>
  )
}

export default ThemedWorldImg