import { StyleSheet } from 'react-native'
import { colors } from '../theme/Theme'

const tabBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#2D3C4B',
    paddingVertical: 10,
    borderTopColor: colors.primary[500],
    borderTopWidth: 1
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: colors.primary[50],
    fontSize: 15
  },
  buttonTextSelected: {
    textAlign: 'center',
    color: colors.primary[500],
    fontSize: 16,
    fontWeight: 'bold'
  }
})

const loginStyle = StyleSheet.create({
  input: {
    marginVertical: 30
  },
  button: {
    marginVertical: 30
  }
})

const homeStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  heading: {
    color: colors.primary[100]
  }
})

const progressStep = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '100%',
    textAlign: 'center',
    fontSize: 40,
  },
  picture: {
    width: '100%',
    height: 100,
    marginTop: 30,
    marginLeft: 30,
  },
  button: {
    // marginTop: 30,
    marginLeft: 60,
  },
  box: {
    width: '100%',
    backgroundColor: '#DCDCDC',
    height: 100,
    marginTop: 30,
    marginLeft: 30,
  },
  boxText: {
    textAlign: 'center',
  }
})

export { tabBarStyle, loginStyle, homeStyle, progressStep }
