export interface IPersonItem {
  birthDay: string
  deathDay: string | null
  gender: number
  hunkuk: string
  id: number
  imgUrl: string | null
  name: string
  work: string
  birthDayFormat: string
  deathDayFormat: string
}

export interface IPersonDetail extends IPersonItem {
  achivement: string | null
  diffName: string | null
  judgeYear: string
  registerLarge: string | null
  registerMid: string | null
  imgSourceId: number
  achivementSourceId: number
  clickCount: number
}

export interface IPersonListPageData {
  page: number
  limit: number
  searchText: string
}

export interface ISourceDetailItem {
  id: number
  name: string
  url: string
}

export interface ISourceDetail {
  imgSource: ISourceDetailItem
  achivementSource: ISourceDetailItem
}
