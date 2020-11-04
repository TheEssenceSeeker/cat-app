export function getRandomMsg() {
  const messages = [
    'Зацени милую кошатину, которая нашлась в Cat App!',
    'Хахаха! Угарная кошатина из Cat App!',
    'Смотри, что нашлось в Cat App! Ну это просто милота :3',
    'Котики из Cat App отакуэ! :D',
    'Котикиииииии из Cat App!!! <3',
    'Ахаха! Шо творят эти коты из Cat App!!!',
    'Рофляные пушистые морды из Cat App! :D',
    'Нелепые кошаки из Cat App!',
  ]
  const index = Math.floor(Math.random() * (messages.length))
  return messages[index]
}