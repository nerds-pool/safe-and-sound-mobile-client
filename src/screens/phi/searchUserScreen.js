import React, { useState } from "react";
import { TextInput } from "react-native";
import theme from "../../../lib/theme";
import { Screen } from "../../components/ui";
import { UserTile } from "../../components/modals";
import api from "../../api/index"

const searchUserScreen = () => {
  const [search, setSearch] = useState(null);
  const [usersArray, setUsersArray] = useState([]);

  
  const handleChangeText = (value) => {
    setSearch(value);
  };

  const handleEndEdit = async () => {
    try {
      const fetchUserData = await api.get.fetch_user(search);
      if (!fetchUserData) {
        throw new Error("Something Went Worng");
      }
      setUsersArray([fetchUserData.data.result]);
    } catch (error) {
      alert(
        "Something went wrong while loading. Please check your internet connection..."
      );
      console.error(error.message);
    } 
  }

  return (
    <Screen>
      <TextInput
        style={theme.styles.txtInput}
        placeholder="Enter NIC to Search a User"
        onChangeText={handleChangeText}
        value={search}
        keyboardType="number-pad"
        onEndEditing={handleEndEdit}
      />
      {usersArray.map((user) => (
        <UserTile
          key={usersArray.indexOf(user)}
          name={user.name}
          contact={user.contact}
          email={user.email}
          gender={user.gender}
          profession={user.profession}
          address={user.address}
          city={user.city}
        />
      ))}
    </Screen>
  );
};

export default searchUserScreen;
