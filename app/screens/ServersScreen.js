import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppText from '../components/AppText';
import Header from '../components/Header';
import ServerCard from '../components/ServerCard';
import axios from 'axios';
const arr = [
  {id: 'I', name: 'Ospringfsdfsdfsdffsfg', cash: '1000PLN'},
  {id: 'II', name: 'Borekk', cash: '1000PLN'},
  {id: 'III', name: 'k3zzy', cash: '1000PLN'},
  {id: 'IV', name: 'Rager_', cash: '1000PLN'},
  {id: 'V', name: 'HappyGFX', cash: '1000PLN'},
];

const arr2 = [
  {id: 'I', name: 'Sowa', cash: '1000PLN'},
  {id: 'II', name: 'Sohan', cash: '1000PLN'},
  {id: 'III', name: 'rijzy', cash: '1000PLN'},
  {id: 'IV', name: 'Ranger', cash: '1000PLN'},
  {id: 'V', name: 'mentor', cash: '1000PLN'},
];
const API_KEY ="this is the Key"
export default function TopServers() {
  const [cashMiners, setCashMiners] = useState([]);
  const [blockMiners, setBlockMiners] = useState([]);
  const [toplevel, setTopLevel] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get(`${API_KEY}/users`);
    // console.log(res.data);
    setCashMiners(res.data);
    setBlockMiners(res.data);
    setTopLevel(res.data);
    ascend();
    setLoading(false);
  };

  function ascend() {
    cashMiners.sort((a, b) => b.mined_cash - a.mined_cash);
    blockMiners.sort((a, b) => b.mined_block - a.mined_block);
    toplevel.sort((a, b) => b.mining_level - a.mining_level);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <Header />
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.8)',

          paddingBottom: hp(5),
          height: hp(85),
          marginTop: -hp(82),
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: Colors.white,
            fontWeight: '700',
            padding: wp(10),
          }}>
          Topki serwerowe
        </Text>
        <ScrollView>
          <Text
            style={{
              fontSize: 13,
              color: Colors.gray,
              fontWeight: '400',
              paddingHorizontal: wp(10),
              textAlign: 'right',
            }}>
            Wykonanych pieniędzy
          </Text>
          {loading ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="small" color={Colors.sec} />
            </View>
          ) : (
            cashMiners.map((data, index) => {
              return (
                <ServerCard
                  id={index}
                  nickname={data.nickname}
                  cash={data.mined_cash}
                />
              );
            })
          )}

          <Text
            style={{
              fontSize: 13,
              color: Colors.gray,
              fontWeight: '400',
              paddingHorizontal: 30,
              marginTop: hp(3),
              textAlign: 'right',
            }}>
            Wykpane bloki
          </Text>
          {loading ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="small" color={Colors.sec} />
            </View>
          ) : (
            blockMiners.map((data, index) => {
              return (
                <ServerCard
                  id={index}
                  nickname={data.nickname}
                  cash={data.mined_cash}
                />
              );
            })
          )}
          <Text
            style={{
              fontSize: 13,
              color: Colors.gray,
              fontWeight: '400',
              paddingHorizontal: 30,
              marginTop: hp(3),
              textAlign: 'right',
            }}>
            Level kopania
          </Text>
          {loading ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="small" color={Colors.sec} />
            </View>
          ) : (
            toplevel.map((data, index) => {
              return (
                <ServerCard
                  id={index}
                  nickname={data.nickname}
                  cash={data.mined_cash}
                />
              );
            })
          )}
        </ScrollView>
      </View>
    </>
  );
}
