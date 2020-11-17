import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

export const OrangeButton = ({ isRound = false, ...restProps }) => {
  const btnStyles = [styles.btn]

  if (isRound) {
    btnStyles.push(styles.roundBtn)
  }

  return (
    <Button
      containerStyle={styles.btnContainer}
      buttonStyle={btnStyles}
      titleStyle={{ marginLeft: 7 }}
      {...restProps}
    />
  )
}

const Container = ({ children, style, ...restProps }) => {
  return (
    <View style={[styles.container, style]} {...restProps}>
      {children}
    </View>
  )
}

OrangeButton.Container = Container

const styles = StyleSheet.create({
  btnContainer: {
    height: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#d24615',
    height: '100%',
    borderRadius: 5000,
    paddingHorizontal: 15,
  },
  roundBtn: {
    aspectRatio: 1,
    paddingHorizontal: 0,
  },
  container: {
    height: (Dimensions.get('window').height / 100) * 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
