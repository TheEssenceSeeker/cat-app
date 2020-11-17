import React, { useState } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import { OrangeButton } from './OrangeButton'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const OptionsGroup = ({ children, disabled }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <View style={isOpen ? styles.container : {}}>
        <OrangeButton
          title=""
          onPress={() => setIsOpen(prev => !prev)}
          disabled={disabled}
          icon={
            <Icon
              name={isOpen ? 'chevron-down' : 'ellipsis-v'}
              size={25}
              color="white"
            />
          }
          isRound
        />
      </View>
      {isOpen && (
        <View style={[styles.container, styles.content]}>{children}</View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.1)',
    borderBottomLeftRadius: (Dimensions.get('window').height / 100) * 4,
    borderBottomRightRadius: (Dimensions.get('window').height / 100) * 4,
  },
  content: {
    position: 'absolute',
    bottom: (Dimensions.get('window').height / 100) * 8,
    borderTopLeftRadius: (Dimensions.get('window').height / 100) * 4,
    borderTopRightRadius: (Dimensions.get('window').height / 100) * 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
})
