import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Share, Dimensions, Text, Button } from 'react-native'
import { Navbar } from '../components/Navbar'
import { CatImage } from '../components/CatImage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoadingContext } from '../context/LoadingContext'
import { downloadFile } from '../utils/downloadFile'
import { getRandomMsg } from '../utils/randomShareMsg'
import { FiltersModal } from '../components/FiltersModal'
import { OrangeButton } from '../components/OrangeButton'
import { OptionsGroup } from '../components/OptionsGroup'

export default function MainPage() {
  const [cat, setCat] = useState({})
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [filterString, setFilterString] = useState('')

  const { loading, setLoading } = useContext(LoadingContext)

  const fetchCat = () => {
    setLoading(true)
    let apiUrl = 'https://api.thecatapi.com/v1/images/search'
    apiUrl += filterString ? `?${filterString}` : ''

    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        setCat(res[0])
      })
  }

  const applyFilters = mimeTypes => {
    if (mimeTypes.length === 3) {
      setFilterString('')
    } else {
      setFilterString(`mime_types=${mimeTypes.join(',')}`)
    }
    setIsFiltersOpen(false)
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${getRandomMsg()} ${cat.url}`,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <View style={styles.container}>
      <FiltersModal visible={isFiltersOpen} onClose={applyFilters} />
      <Navbar title="Гык" />
      <CatImage cat={cat} loading={loading} />

      <OrangeButton.Container style={{ marginBottom: '7%' }}>
        <OptionsGroup disabled={loading}>
          <OrangeButton.Container style={{ marginBottom: 5 }}>
            <OrangeButton
              title=""
              onPress={() => downloadFile(cat.url)}
              disabled={loading}
              icon={<Icon name="content-save" size={25} color="white" />}
              isRound
            />
          </OrangeButton.Container>
          <OrangeButton.Container style={{ marginBottom: 5 }}>
            <OrangeButton
              title=""
              onPress={onShare}
              disabled={loading}
              icon={<Icon name="share-variant" size={25} color="white" />}
              isRound
            />
          </OrangeButton.Container>
          <OrangeButton.Container style={{ marginBottom: 5 }}>
            <OrangeButton
              title=""
              onPress={() => setIsFiltersOpen(true)}
              disabled={loading}
              icon={<Icon name="filter" size={25} color="white" />}
              isRound
            />
          </OrangeButton.Container>
        </OptionsGroup>
        <OrangeButton
          title="Хочу ещё котика!"
          onPress={fetchCat}
          disabled={loading}
          icon={<Icon name="cat" size={25} color="white" />}
        />
      </OrangeButton.Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
