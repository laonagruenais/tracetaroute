import React from "react";
import { Badge, Box, Icon, Text, View, VStack } from "native-base";
import { progressStep } from "../../theme/Styles";
import { TestWatcher } from "jest";

function ProgressStepModalScreen2() {
  return (
    <>
      <View>
        <Text>Trajets disponible</Text>
      </View>
      <VStack>
        <Box style={progressStep.box}>
          <Text style={progressStep.boxText}>This is a Box</Text>
        </Box>
        <Box style={progressStep.box}>
          <Text style={progressStep.boxText}>This is a Box2</Text>
        </Box>
        <Box style={progressStep.box}>
          <Text style={progressStep.boxText}>This is a Box3</Text>
        </Box>
      </VStack >
    </>
  );
}

export default ProgressStepModalScreen2;