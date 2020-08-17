export interface IPersonItem {
  achivement: string | null
  birthDay: string
  deathDay: string | null
  gender: number
  hunkuk: string
  id: number
  imgUrl: string | null
  name: string
  work: string
  clickCount: number
}

export interface IPersonDetail extends IPersonItem {
  diffName: string | null
  judgeYear: string
  registerLarge: string | null
  registerMid: string | null
}

export interface IPersonListPageData {
  page: number
  limit: number
}
