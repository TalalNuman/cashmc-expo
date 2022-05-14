import {
  View,
  Image,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
// import {
//   VStack,
//   HStack,
//   Alert,
//   NativeBaseProvider,
//   IconButton,
//   CloseIcon,
// } from 'native-base';
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import AppText from "../components/AppText";
import * as Yup from "yup";
import { Formik } from "formik";
import FormField from "../components/FormField";
import axios from "axios";

const API_KEY = "This is the Key";
const validationSchema = Yup.object().shape({
  nickname: Yup.string().required().min(5).label("Nick Name"),
  password: Yup.string().required().label("Password"),
});

export default function Home() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const fetchData = async (data) => {
    const res = await axios.post(`${API_KEY}/auth/login`, data);
    const isBlocked = await axios.get(`${API_KEY}/users/${data["nickname"]}`);

    console.log(res.data);
    console.log("first", isBlocked.data[0].is_blocked);
    setMessage(res.data.message);
    if (
      res.data.message === "Logged in" &&
      isBlocked.data[0].is_blocked === 0
    ) {
      navigation.navigate("Witaj");
    } else {
      // setStatus(1);
      {
        isBlocked.data[0].is_blocked === 1
          ? alert("You are blocked")
          : alert(res.data.message);
      }
    }
  };
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View
          style={{
            height: hp(100),
            backgroundColor: Colors.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StatusBar backgroundColor={Colors.primary} />
          <Image
            style={{ height: 150, width: 150, marginVertical: hp(2) }}
            source={require("../assets/icons/logo.png")}
          />
          <Formik
            initialValues={{ nickname: "", password: "" }}
            onSubmit={(values) => {
              // console.log(values);
              // fetchData(values);
              navigation.navigate("Witaj", { nickname: values.nickname });
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <>
                <FormField
                  name={"nickname"}
                  placeholder={"Wpisz swój nick.."}
                />
                <FormField name={"password"} placeholder={"Password"} />

                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    style={{
                      marginTop: hp(3),
                      backgroundColor: "rgba(52, 52, 52, 0.8)",
                      width: wp(85),
                      alignItems: "center",
                      justifyContent: "center",
                      height: hp(7),
                      borderRadius: 10,
                    }}
                  >
                    <AppText
                      size={2.2}
                      fontWeight={"600"}
                      style={{ color: Colors.white }}
                    >
                      Kontynuuj
                    </AppText>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(1.5),
              marginRight: wp(16),
            }}
          >
            <AppText size={1.4} style={{ color: Colors.gray }}>
              Mam problem z zalogowaniem się.
            </AppText>
            <TouchableOpacity onPress={() => console.log("Skontaktuj się")}>
              <AppText
                size={1.4}
                style={{ color: Colors.sec, marginLeft: wp(2) }}
              >
                Skontaktuj się
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Image
        style={{ position: "absolute", top: hp(2), left: -wp(7) }}
        source={require("../assets/icons/gold.png")}
      />
      <Image
        style={{ position: "absolute", top: hp(13), right: -wp(24) }}
        source={require("../assets/icons/gold.png")}
      />
      <Image
        style={{ position: "absolute", top: hp(73), right: -wp(15) }}
        source={require("../assets/icons/gold.png")}
      />
      <Image
        style={{ position: "absolute", top: hp(73), left: -wp(25) }}
        source={require("../assets/icons/gold.png")}
      />
      {/* {status === 1 ? (
        <Alert w="100%" status="error" style={{position: 'absolute', top: 28}}>
          <VStack space={2} flexShrink={1} w="100%">
            <TouchableOpacity onPress={() => setStatus(0)}>
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {message}
                  </Text>
                </HStack>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </Alert>
      ) : (
        <View></View>
      )} */}
    </>
  );
}
