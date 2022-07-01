import React, { useState } from "react";
import {
    AppBar,
    IconButton,
    Button,
    Avatar,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const Navigation = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <View>
            <AppBar
                color="lightblue"
                title="Title"
                leading={props => (
                    <IconButton
                        icon={props => <Icon name="menu" {...props} />}
                        {...props}
                    />
                )}
                trailing={props =>
                    loggedIn ? (
                        <IconButton
                            icon={<Avatar label="Test" size={28} />}
                            onPress={() => setLoggedIn(!loggedIn)}
                            {...props}
                        />
                    ) : (
                        <Button
                            variant="text"
                            title="Login"
                            compact
                            style={{ marginEnd: 4 }}
                            onPress={() => setLoggedIn(!loggedIn)}
                            {...props}
                        />
                    )
                }
            />
        </View>
    );
};

export default Navigation
