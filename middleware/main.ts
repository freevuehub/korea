import { Context } from '@nuxt/types'
import { getMainData } from '~/API'
import { MainConst } from '~/Constant'
import { IPersonsNameAndImage, INameAndImage } from '~/types'

export default async (context: Context) => {
  const { todayAddPerson, todayPerson, personsNameAndImage } = await getMainData()

  const personReduce = (prev: INameAndImage, cur: IPersonsNameAndImage) => ({
    nameList: [cur.name, ...prev.nameList],
    imageList: [cur.imgUrl, ...prev.imageList],
  })
  const nameAndImage = personsNameAndImage.reduce(personReduce, {
    nameList: [],
    imageList: [],
  })

  await context.app.store?.dispatch(`main/${MainConst.$Call.Item}`, {
    todayAddPerson,
    todayPerson,
    nameAndImage,
  })
}
