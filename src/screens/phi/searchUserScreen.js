import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import theme from "../../theme";
import Screen from "../../components/ui/Screen";
import Users from "../../dummy-data/users";
import UserTile from "../../components/modals/UserTile";

const searchUserScreen = () => {
  const [search, setSearch] = useState(null);
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    const array = Users.filter((user) => user.id.toString().includes(search));
    setUsersArray(array);
  }, [search]);

  const handleChangeText = (value) => {
    setSearch(value);
  };

  return (
    <Screen>
      <TextInput
        style={theme.styles.txtInput}
        placeholder="Enter NIC to Search a User"
        onChangeText={handleChangeText}
        value={search}
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
