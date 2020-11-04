import React, {useContext, useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Navbar} from '../components/Navbar'
import {CatImage} from '../components/CatImage'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {LoadingContext} from "../context/LoadingContext"
import {downloadFile} from "../utils/downloadFile"

export default function MainPage() {
  const [cat, setCat] = useState({})
  const {loading, setLoading} = useContext(LoadingContext)

  const fetchCat = () => {
    setLoading(true)
    const apiUrl = 'https://api.thecatapi.com/v1/images/search'
    // const apiUrl = 'https://api.thecatapi.com/v1/images/search?mime_types=gif'

    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        setCat(res[0])
      })
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <View style={styles.container}>
      <Navbar title="Гык"/>
      <CatImage cat={cat} loading={loading}/>
      <View style={styles.btnsContainer}>
        <Button
          title=''
          onPress={() => downloadFile(cat.url)}
          containerStyle={styles.btnContainer}
          buttonStyle={[styles.btn, styles.roundBtn]}
          disabled={loading}
          icon={
            <Icon
              name="content-save"
              size={25}
              color="white"
            />
          }
        />
        <Button
          title='Хочу ещё котика!'
          onPress={fetchCat}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          disabled={loading}
          icon={
            <Icon
              name="cat"
              size={25}
              color="white"
            />
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  btnContainer: {
    height: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#d24615',
    height: '100%',
    borderRadius: 5000,
    paddingHorizontal: 30,
  },
  roundBtn: {
    aspectRatio: 1,
    paddingHorizontal: 0
  },
  btnsContainer: {
    // flex: 1,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '7%'
  }
})
