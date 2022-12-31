import React, { useRef } from "react";
import {images, colors} from '@commons';

import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
} from "react-native";

type SearchInputProps = {
  onChange: any;
  placeholder?: string;
  value: any;
  style?: any;
  textColor?: any;
  keyboardType?: any;
  onKeyPress?: any;
  maxLength?: number;
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray300
  },
  iconView: {
    alignItems: "center",
    paddingLeft: 12
  },
  inputText: {
    textAlign: "left",
    fontSize: 17,
    paddingLeft: 10,
    flex: 1,
  },
});

const SearchInput = (props: SearchInputProps) => {
  const inputRef = useRef<TextInput | null>(null);

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={{ ...styles.container, ...props.style }}>
        <View style={styles.iconView}>
          <Image source={images.ic_search} />
        </View>
        <TextInput
          ref={inputRef}
          style={{
            ...styles.inputText,
            ...props.style,
          }}
          keyboardType={props.keyboardType || "default"}
          placeholder={props.placeholder ? props.placeholder : ""}
          onChangeText={(newValue) => props.onChange(newValue)}
          value={props.value}
          onKeyPress={props.onKeyPress}
          maxLength={props.maxLength}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchInput;
