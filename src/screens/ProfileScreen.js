// import { Image } from 'native-base'
import { Image } from 'react-native'
import React from 'react'
import HeaderProfil from '../components/profile/HeaderProfil'
import UserProfil from '../components/profile/UserProfil'
// import UserTrips from '../components/profile/UserTrips'
// import { TabsComponent } from '../components/tabs/Tabs'

// Navigation dans le profil

// fonction pour l'affichage du bon screen avec une route
function ProfileScreen() {
  return (
    <>
      <HeaderProfil />
      <UserProfil />
      {/* <TabsComponent
        views={[
          {
            key: 'first',
            title: 'Profil',
            component: UserProfil
          },
          // {
          //   key: 'second',
          //   title: 'Mes trajets',
          //   component: UserTrips
          // }
        ]}
        style={{ marginTop: 30 }}
      /> */}
    </>
  )
}

export default ProfileScreen
