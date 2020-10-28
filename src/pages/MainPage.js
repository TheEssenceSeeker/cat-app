import React, {useContext, useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Navbar} from '../components/Navbar'
import {CatImage} from '../components/CatImage'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {LoadingContext} from "../context/LoadingContext"

export default function MainPage() {
  const [cat, setCat] = useState({})
  const {loading, setLoading} = useContext(LoadingContext)

  const fetchCat = () => {
    setLoading(true)
    const apiUrl = 'https://api.thecatapi.com/v1/images/search'
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
      <Button
        title='Хочу ещё котика!'
        onPress={fetchCat}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        loading={loading}
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  btnContainer: {
    height: '10%',
    marginBottom: '10%',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  btn: {
    marginBottom: 20,
    backgroundColor: '#d24615',
    height: '100%',
    width: '70%',
    borderRadius: 5000,
  }
})
