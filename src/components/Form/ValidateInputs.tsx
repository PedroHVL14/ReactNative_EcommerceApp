import React from "react";
import { Text } from "react-native";
import styles from "./style";

// FUNCTION show_error TAKES THREE ARGUMENTS AND RETURNS A TEXT COMPONENT
// THE FIRST ARGUMENT IS A BOOLEAN, LIKE IsEmailValid, IsPasswordValid, ETC.
// THE SECOND IS A STRING, LIKE "Please enter a valid email address."
// AND THE THIRD IS A BOOLEAN, LIKE IsTermsValid
export function show_error(
  isValueValid: boolean,
  text: string,
  isTerms: boolean
) {
  // SHOW ERROR MESSAGE IF THE USER DOES NOT FILL IN THE INPUT FIELDS
  if (!isValueValid) {
    // IF THE PROPS IS TERMS, SHOW THE ERROR MESSAGE IN A DIFFERENT STYLE
    if (isTerms) {
      return <Text style={styles.validationTerms}>{text}</Text>;
    } else {
      return <Text style={styles.validationText}>{text}</Text>;
    }
  }
}

