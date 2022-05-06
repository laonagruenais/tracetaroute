import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { Container, Heading, Text, View } from "native-base";
import { progressStep, homeStyle } from "../../theme/Styles";
import { getCities } from "../../services/Api";
import { useAuth } from "../../contexts/AuthContext";
import { useProgressStepContext } from "../../contexts/ProgressStepContext";


function ProgressStepModalScreen1() {
  const image1 = require("../../images/photo/nantes.jpg");
  const image2 = require("../../images/photo/paris.jpg");
  const image3 = require("../../images/photo/lyon.jpg");
  const images = [image1, image2, image3];

  // const { state } = useAuth()

  const [cities, setCities] = useState([]);

  const { handleNext } = useProgressStepContext()

  const { state: { token } } = useAuth()
  useEffect(() => {
    const getCity = async () => {
      const cities = await getCities(token)
      setCities(cities.data)
    }
    getCity()
  }, [])

  return (
    <>
      <Heading style={homeStyle.heading}>
        Hey! 🤙
      </Heading>
      <View>
        {
          cities.map((city, index) => (
            < ImageBackground key={index} source={images[index]} style={progressStep.picture} >
              <Text onPress={handleNext} style={progressStep.text}>{city.attributes.Name}</Text>
            </ImageBackground>
          ))
        }
      </View >
    </>
  );
}

export default ProgressStepModalScreen1;