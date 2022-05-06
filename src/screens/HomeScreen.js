import React, {
  useEffect,
  useState,
} from 'react'
import { Box, Container, Heading, View, Text, VStack, Button } from 'native-base'
import ProfilNotCompleteAlert from '../components/alerts/ProfilNotCompleteAlert'
import { useAuth } from '../contexts/AuthContext'
import { homeStyle, progressStep } from '../theme/Styles'
import _ from 'underscore'
import Cities from '../components/cities/Cities'
import { useProgressStepContext } from '../contexts/ProgressStepContext'
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

function HomeScreen({ navigation }) {
  const { state } = useAuth()
  const { steps, activeIndex, handleNext, handleBack } = useProgressStepContext()
  const [activeStep, setActiveStep] = useState(steps[activeIndex])

  useEffect(() => {
    setActiveStep(steps[activeIndex])
  }, [activeIndex])

  // Si le profil n'est pas complet ça affiche le message d'alerte
  const isProfileComplete = () => {
    return (
      !_.isEmpty(state.user.phone) &&
      !_.isEmpty(state.user.status) &&
      !_.isEmpty(state.user.bio)
    )
  }

  return (
    <>
      {!isProfileComplete()
        ? (
          <ProfilNotCompleteAlert
            onPressGoProfile={() => navigation.navigate('Profile')}
          />
        )
        : null}
      <Container w='100%'>
        <Box style={homeStyle.container}>
          {/* <Heading style={homeStyle.heading}>
            Hey! {state.user.firstName} 🤙
          </Heading> */}
          <activeStep.Component />
          {!activeStep.hideNext && (
            <>
              {activeIndex === steps.length - 1
                ? (
                  <VStack direction='row' space={4} style={{ width: '100%' }}>
                    <Box style={{ width: '100%' }}>

                      {activeIndex !== 0 &&
                        <Button onPress={handleBack}>Retour</Button>}
                      <Button onPress={() => { }}>Créer le trajet</Button>
                    </Box>
                  </VStack>
                )
                : (
                  <VStack direction='row' space={4} w='100%'>
                    <Box style={{ width: '100%' }}>
                      {activeIndex !== 0 &&
                        <Button onPress={handleBack} style={progressStep.button}>Retour</Button>}
                      <Button onPress={handleNext} style={progressStep.button}>Suivant</Button>
                    </Box>
                  </VStack>
                )}
            </>
          )}
        </Box>
      </Container>
    </>
  )
}

export default HomeScreen
