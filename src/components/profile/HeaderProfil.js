import React from 'react'
import { Container, Image, Text } from 'native-base'
import { styles } from '../../theme/Profil'

function HeaderProfil() {
  var yourPicture = require('../../images/photo/photodeprofil.jpg');

  return (
    <Container
      style={styles.centerHeader}
      h='15%'
      w='100%'
    >
      <Image
        source={yourPicture}
        alt='Alternate Text' size='xl' borderRadius={100}
        position='relative'
      />
      {/* <Text> SALUT </Text> */}
    </Container>
  )
}

export default HeaderProfil
