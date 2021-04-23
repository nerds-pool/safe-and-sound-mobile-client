import React, { useState } from "react";
import { TextInput } from "react-native";
import theme from "../../../lib/theme";
import { Loading, Screen } from "../../components/ui";
import { UserTile } from "../../components/modals";
import api from "../../api/index";

const searchUserScreen = () => {
  const [search, setSearch] = useState(null);
  const [usersArray, setUsersArray] = useState([]);
  const [loading, setloading] = useState(false);

  const handleChangeText = (value) => {
    setSearch(value);
  };

  const handleEndEdit = async () => {
    try {
      setloading(true);
      const { data } = await api.get.fetch_user(search);
      if (!data.success) {
        throw new Error(data.msg);
      }
      setUsersArray([data.result]);
    } catch (error) {
      alert("Oops! " + error.message);
    } finally {
      setloading(false);
    }
  };

  if (loading) return <Loading />;

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
          gender={user.gender}
          profession={user.profession}
          address={user.address.line}
          city={user.address.city}
        />
      ))}
    </Screen>
  );
};

export default searchUserScreen;
