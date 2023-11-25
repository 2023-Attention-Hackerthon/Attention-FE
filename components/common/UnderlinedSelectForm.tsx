import React from "react";
import ModalDropdown, { ModalDropdownProps } from "react-native-modal-dropdown";
import { styles } from "./options";
import Colors from "../../constants/Colors";

export default function UnderlinedSelectForm({ ...props }: ModalDropdownProps) {
  return (
    <ModalDropdown
      style={styles.underlinedForm}
      textStyle={styles.formText}
      dropdownListProps={{
        backgroundColor: Colors.background.primary,
      }}
      dropdownStyle={{
        width: "80%",
        backgroundColor: Colors.background.primary,
      }}
      dropdownTextStyle={{
        fontSize: 16,
        color: Colors.text.assistive,
      }}
      {...props}
    />
  );
}
