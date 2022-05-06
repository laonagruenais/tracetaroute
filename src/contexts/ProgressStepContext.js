import React, { createContext, useContext, useState, useMemo } from 'react'
import ProgressStepModalScreen1 from '../screens/ProgressStepModal/ProgressStepModalScreen1'
import ProgressStepModalScreen2 from '../screens/ProgressStepModal/ProgressStepModalScreen2'
import ProgressStepModalScreen3 from '../screens/ProgressStepModal/ProgressStepModalScreen3'
import ProgressStepModalScreen4 from '../screens/ProgressStepModal/ProgressStepModalScreen4'

const ProgressStepContext = createContext()

export const useProgressStepContext = () => {
  const context = useContext(ProgressStepContext)
  if (!context) {
    throw new Error(
      'useAddTripContext must be inside a ProgressStepProvider'
    )
  }
  return context
}

export const ProgressStepProvider = ({ children }) => {
  const steps = [
    {
      Component: ProgressStepModalScreen1
    },
    {
      Component: ProgressStepModalScreen2
    },
    {
      Component: ProgressStepModalScreen3
    },
    {
      Component: ProgressStepModalScreen4
    }
  ]

  // Gérer le retour en arrière
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + 1)
  }

  const handleBack = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex - 1)
  }

  const [citieDatas, setCitieDatas] = useState({
    title: null,
    description: null,
    pilot: null,
    departurePoint: {
      name: null,
      lat: null,
      long: null
    },
    arivalPoint: {
      name: 'Campus Eduservice',
      lat: null,
      long: null
    },
    waypoints: null,
    nbSeats: null,
    departureDate: new Date(),
    arivalDate: new Date()
  })

  const value = useMemo(
    () => ({
      steps,
      activeIndex,
      setActiveIndex,
      handleNext,
      handleBack,
      citieDatas,
      setCitieDatas
    }),
    [
      activeIndex,
      setActiveIndex,
      handleNext,
      handleBack, citieDatas, setCitieDatas
    ]
  )

  return (
    <ProgressStepContext.Provider value={value}>
      {children}
    </ProgressStepContext.Provider>
  )
}