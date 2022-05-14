import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import {
  VStack,
  HStack,
  Alert,
  NativeBaseProvider,
  IconButton,
  CloseIcon,
} from "native-base";
import React, { useState } from "react";
const Data = [
  {
    id: 1,
    image: require("../assets/icons/yellowBox.png"),
    background: require("../assets/icons/yellowBG.png"),
    title: "Product 1",
    desc: "It is a long established fact that a reader will",
    price: "50",
  },
  {
    id: 2,
    image: require("../assets/icons/purpleBox-mdpi.png"),
    background: require("../assets/icons/purpleBG.png"),
    title: "Product 2",
    desc: "It is a long established fact that a reader will",
    price: "60",
  },
  {
    id: 3,
    image: require("../assets/icons/yellowBox.png"),
    background: require("../assets/icons/yellowBG.png"),

    title: "Product 3",
    desc: "It is a long established fact that a reader will",
    price: "70",
  },
  {
    id: 4,
    image: require("../assets/icons/purpleBox-mdpi.png"),
    background: require("../assets/icons/purpleBG.png"),
    title: "Product 4",
    desc: "It is a long established fact that a reader will",
    price: "500",
  },
  {
    id: 5,
    image: require("../assets/icons/yellowBox.png"),
    background: require("../assets/icons/yellowBG.png"),
    title: "Product 5",
    desc: "It is a long established fact that a reader will",
    price: "10",
  },
  {
    id: 6,
    image: require("../assets/icons/purpleBox-mdpi.png"),
    background: require("../assets/icons/purpleBG.png"),
    title: "Product 6",
    desc: "It is a long established fact that a reader will",
    price: "200",
  },
];
const NewScreen = () => {
  const [price, setprice] = useState(100);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("");

  const fun1 = () => {
    setStatus(1);
    setMessage("You don't have enough emarlds");
    setTimeout(() => {
      setStatus(0);
    }, 1000);
  };

  const fun2 = (Product) => {
    setStatus(2);
    setMessage(`${Product} Bought Successfully`);
    setTimeout(() => {
      setStatus(0);
    }, 2000);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.dark} />
        <Image
          style={{
            position: "absolute",
            top: -hp(4.5),
            left: -wp(8),
          }}
          source={require("../assets/icons/gold.png")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: wp(7),
          }}
        >
          <View></View>

          <Image
            style={{
              position: "absolute",
              top: hp(29),
              right: -wp(22),
            }}
            source={require("../assets/icons/gold.png")}
          />
          <Image
            style={{ width: 70, height: 70, marginLeft: wp(6) }}
            source={require("../assets/icons/logo.png")}
          />
          <TouchableOpacity>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/icons/list.png")}
            />
          </TouchableOpacity>
        </View>

        {status === 1 ? (
          <Alert w="100%" status="error" style={{ position: "absolute" }}>
            <VStack space={2} flexShrink={1} w="100%">
              <TouchableOpacity onPress={() => setStatus(0)}>
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
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
        )}

        {status === 2 ? (
          <Alert w="100%" status="success" style={{ position: "absolute" }}>
            <VStack space={2} flexShrink={1} w="100%">
              <TouchableOpacity onPress={() => setStatus(0)}>
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
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
        )}
        <View style={styles.first}>
          <View style={{ flexDirection: "row", padding: 2 }}>
            <Image
              style={styles.sm}
              source={require("../assets/icons/gemLG.png")}
            />
            <Text style={styles.texta}>Posiadane : {price}</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.textb}>Sklep Serwera</Text>
          <View style={{ marginTop: hp("2%"), height: hp("65%") }}>
            <FlatList
              data={Data}
              numColumns={2}
              keyExtractor={(item) => {
                item.id;
              }}
              renderItem={({ item }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <View style={styles.cart}>
                      <View
                        style={{ flexDirection: "column", marginTop: hp("0%") }}
                      >
                        <ImageBackground
                          source={item.background}
                          style={{ width: wp(45), height: hp(12) }}
                        >
                          <View
                            style={{
                              alignSelf: "center",
                              alignItems: "center",

                              marginTop: hp(2),
                            }}
                          >
                            <Image source={item.image} style={styles.image1} />
                          </View>
                        </ImageBackground>
                      </View>

                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.desc}>{item.desc}</Text>
                      <View style={styles.btn}>
                        <TouchableOpacity
                          onPress={
                            item.price > price ? fun1 : () => fun2(item.title)
                          }
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={styles.textc}>Zakup</Text>
                            <Image
                              style={styles.smm}
                              source={require("../assets/icons/gem.png")}
                            />
                            <Text style={styles.textc}>{item.price}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default NewScreen;
const styles = StyleSheet.create({
  container: {
    height: hp("95%"),
    width: wp("100%"),
    backgroundColor: "#1d191c",
  },
  img1: {
    height: hp(10),
    width: wp(20),
  },
  img2: {
    height: hp(12),
    width: wp(24),
  },
  img3: {
    height: hp(3),
    width: wp(6),
  },
  first: {
    width: wp("70%"),
    height: hp("6%"),
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#16491f",
    marginTop: hp("3%"),
  },
  sm: {
    height: hp(5),
    width: wp(10),
    marginLeft: wp(2),
  },
  smm: {
    height: hp(3),
    width: wp(6),
    marginLeft: wp(1),
  },
  texta: {
    fontSize: 16,
    alignSelf: "center",
    color: "#138029",
    marginLeft: wp("5%"),
    fontWeight: "700",
  },
  main: {
    width: wp("100%"),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#292428",
    marginTop: hp("5%"),
    height: hp("80%"),
  },
  textb: {
    fontSize: 18,
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
    fontWeight: "bold",
    color: "#fff",
  },
  cart: {
    backgroundColor: "#1d191c",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("45%"),
    borderRadius: 15,
    marginBottom: hp("2%"),
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  image1: {
    height: hp("8%"),
    width: wp("16%"),
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    marginTop: hp("2%"),
  },
  desc: {
    color: "#464345",
    padding: 5,
    fontSize: 10,
    textAlign: "center",
  },
  btn: {
    width: wp("35%"),
    height: hp("5%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292428",
  },
  textc: {
    fontSize: 15,
    color: "#fff",
  },
});
