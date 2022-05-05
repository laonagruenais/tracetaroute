import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { Text, View } from "native-base";
import { progressStep } from "../../theme/Styles";
import { getCities } from "../../services/Api";
import { useAuth } from "../../contexts/AuthContext";

function ProgressStepModalScreen1() {
  const image = require("../../images/photo/nantes.jpg");
  const [cities, setCities] = useState([]);

  const { state: { token } } = useAuth()
  useEffect(() => {
    const getCity = async () => {
      const cities = await getCities(token)
      setCities(cities)
    }
    getCity()
  }, [])

  return (
    <View>
      <ImageBackground source={image}>
        <Text style={progressStep.text}>ProgressStepModalScreen1</Text>
        <Text>{JSON.stringify(cities, null, 2)}</Text>
      </ImageBackground>
    </View>
  );
}

export default ProgressStepModalScreen1;