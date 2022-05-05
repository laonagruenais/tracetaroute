import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { Text, View } from "native-base";
import { progressStep } from "../../theme/Styles";
import { getCities } from "../../services/Api";
import { useAuth } from "../../contexts/AuthContext";

function ProgressStepModalScreen1() {
  const image1 = require("../../images/photo/nantes.jpg");
  const image2 = require("../../images/photo/paris.jpg");
  const image3 = require("../../images/photo/lyon.jpg");
  const images = [image1, image2, image3];

  const [cities, setCities] = useState([]);

  const { state: { token } } = useAuth()
  useEffect(() => {
    const getCity = async () => {
      const cities = await getCities(token)
      setCities(cities.data)
    }
    getCity()
  }, [])

  return (
    <View>
      {
        cities.map((city, index) => (
          <ImageBackground key={index} source={images[index]} style={progressStep.picture}>
            <Text style={progressStep.text}>{city.attributes.Name}</Text>
            <Text>{index}</Text>
          </ImageBackground>
        ))
      }
    </View >
  );
}

export default ProgressStepModalScreen1;