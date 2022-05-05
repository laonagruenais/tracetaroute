import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

// appel d'api strapi avec axios
// Attention pour le dev sur android il faut mettre l'adresse ip de l'appareil à la place de localhost
// Dans un terminal il faut utiliser ifconfig
// OU 
// Exécuter la commande adb reverse tcp:1337 tcp:1337
const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})


/**
 * Appel d'API pour la connexion
 * @param { Object } credentials
 * @returns { Object }
 */
const loginWithCredentials = async (credentials) => {
  try {
    console.log(credentials)
    const response = await api.post('/auth/local', credentials)
    console.log(JSON.stringify(response.data));
    return response.data
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

/**
 * registerWithRegistrationCredentials
 * @param { props } registrationCredentials Credentials for registration email or username + password requireds
 * @returns { Function } Registration with credentials
 */
const registerWithRegistrationCredentials = async (registrationCredentials) => {
  try {
    const response = await api.post('/auth/local/register', registrationCredentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Récupère toutes les villes de la base de données
const getCities = async (token) => {
  try {
    const response = await api.get('/villes', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// // Récupération des informations de l'utilisateur actuellement connecté
// const getUserInfos = async () => {
//   // On récupère le token de l'utilisateur connecté pour le passer dans le header
//   const getUserToken = await AsyncStorage.getItem('AUTH')
//   const userToken = getUserToken ? JSON.parse(getUserToken).token : null
//   try {
//     const response = await api.get('/users/me', {
//       headers: {
//         Authorization: `Bearer ${userToken}`
//       }
//     })
//     return response.data
//   } catch (error) {
//     console.error(error)
//   }
// }

export {
  loginWithCredentials,
  registerWithRegistrationCredentials,
  getCities
}
