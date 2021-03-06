export interface IPersonListItem {
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

export interface IPersonDetail extends IPersonListItem {
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
  searchText?: string
  hunkukFilterId?: number
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

export interface IHunkukListItem {
  id: number
  name: string
}

export interface IWorkListItem {
  id: number
  name: string
}

export interface ITodayPersonListItem {
  date: string
  id: number
  personId: number
  name: string
  work: string
  hunkuk: string
  imgUrl: string
  birthDay: string
  deathDay: string
}

export interface IHistoryItem {
  id: number
  name: string
  date: string
  contents: string
  imgUrl: string | null
}
