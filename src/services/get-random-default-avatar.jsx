import { storage } from '@services/firebase'

export default async () => {
  const { items } = await storage.ref('users/avatar/default').listAll()
  const randomIndex = Math.floor(Math.random() * 5)

  return await items[randomIndex].getDownloadURL()
}

