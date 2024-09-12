import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Appbar, PaperProvider, Searchbar } from "react-native-paper";

const DocSach_S1 = () => {
  const [search, setSearch] = useState("");

  const listBookPopular = ({ item }) => (
    <TouchableOpacity
      style={{
        width: 230,
        height: 200,
        borderWidth: 1,
      }}
      //   onPress={() => navigation.navigate("TinTuc_S2", { data: item })}
    >
      <View
        style={{
          flex: 6.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          //   source={item.image}
          style={{
            width: "90%",
            height: "90%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          flex: 3.5,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginLeft: 13,
            fontWeight: "500",
          }}
        >
          {/* {item.content} */}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>
      <Appbar.Header style={{ backgroundColor: "#2A7BD3" }}>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Đọc Sách" color="white" />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, borderBottomWidth: 1 }}>
          {/* Search bar */}
          <View
            style={{
              width: "100%",
              height: 85,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Searchbar
              placeholder="Tìm sách"
              value={search}
              onChangeText={setSearch}
              style={{
                width: "90%",
                height: "65%",
                backgroundColor: "#E9E3E3",
                borderWidth: 1,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
        <View style={{ flex: 9 }}>
          <ScrollView style={{ flex: 1 }}>
            {/* FlatList Book */}
            <View
              style={{
                width: "100%",
                height: 300,
                marginTop: 10,
                borderColor: "#D0D0D0",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1.2, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 7.3,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", marginLeft: 13, fontSize: 20 }}
                  >
                    Popular
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    flex: 2.7,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  //   onPress={() => navigation.navigate("")}
                >
                  <Text style={{ fontSize: 16, color: "gray" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 8.8 }}>
                <FlatList
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                  renderItem={listBookPopular}
                  // data={Entertainment}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </PaperProvider>
  );
};

export default DocSach_S1;

const styles = StyleSheet.create({});
