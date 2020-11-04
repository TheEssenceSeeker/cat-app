import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import {ToastAndroid} from 'react-native'

async function saveFile(fileUri, filename) {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  if (status === "granted") {
    const asset = await MediaLibrary.createAssetAsync(fileUri)
    await MediaLibrary.createAlbumAsync("Download", asset, false)
    ToastAndroid.show(`Картинка ${filename} успешно сохранена!`, ToastAndroid.LONG)
  } else {
    ToastAndroid.show(`Сохранение не удалось. Не получено разрешение.`, ToastAndroid.LONG)
  }
}

export function downloadFile(uri) {
  console.log('Got URI ', uri)
  const filename = uri.replace(/^.*[\\\/]/, '')
  let fileUri = FileSystem.documentDirectory + filename
  FileSystem.downloadAsync(uri, fileUri)
    .then(({ uri }) => {
      saveFile(uri, filename)
    })
    .catch(error => {
      console.error(error)
    })
}

