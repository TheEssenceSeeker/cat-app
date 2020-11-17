import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { OrangeButton } from './OrangeButton'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function FiltersModal({ visible, onClose }) {
  const [mimeTypes, setMimeTypes] = useState(['gif', 'png', 'jpg'])

  const toggleMimeType = mimeType => {
    if (!['gif', 'png', 'jpg'].includes(mimeType)) {
      console.log('Wrong mime type')
      return
    }

    setMimeTypes(prev =>
      prev.includes(mimeType)
        ? prev.filter(item => item !== mimeType)
        : [...prev, mimeType]
    )
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose(mimeTypes)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Фильтры</Text>
          <View>
            <Text style={styles.subtitle}>Тип картинки</Text>
            <CheckBox
              title="gif"
              checked={mimeTypes.includes('gif')}
              onPress={() => toggleMimeType('gif')}
              size={30}
              textStyle={styles.checkboxText}
              checkedColor="#d24615"
              center
            />
            <CheckBox
              title="jpg"
              checked={mimeTypes.includes('jpg')}
              onPress={() => toggleMimeType('jpg')}
              size={30}
              textStyle={styles.checkboxText}
              checkedColor="#d24615"
              center
            />
            <CheckBox
              title="png"
              checked={mimeTypes.includes('png')}
              onPress={() => toggleMimeType('png')}
              size={30}
              textStyle={styles.checkboxText}
              checkedColor="#d24615"
              center
            />
          </View>
          <OrangeButton.Container>
            <OrangeButton
              title={'Готово'}
              onPress={() => onClose(mimeTypes)}
              icon={
                <Icon
                  name="checkbox-multiple-marked-outline"
                  size={25}
                  color="white"
                />
              }
            />
          </OrangeButton.Container>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    justifyContent: 'space-between',
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    // color: '#d24615',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  checkboxText: {
    fontSize: 20,
  },
})
