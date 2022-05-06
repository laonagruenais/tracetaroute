import { StyleSheet } from 'react-native'
import { colors } from './Theme'

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 4,
    marginVertical: 12,
    paddingTop: 10
  },
  // tags: {
  //   color: '#0284C7',
  //   backgroundColor: '#2D3C4B',
  //   borderRadius: 2,
  //   paddingVertical: 4,
  //   paddingHorizontal: 5,
  //   maxWidth: 120,
  //   marginRight: 4
  // },
  infos: {
    alignItems: 'center'
  },
  logout: {
    backgroundColor: 'red',
    bottom: 0
  },
  centerHeader: {
    maxWidth: '100%',
    alignItems: 'center',
    backgroundColor: '#2D3C4B',
    padding: 25,
    position: 'relative',
    zIndex: 1
  }
})

export {
  styles
}
