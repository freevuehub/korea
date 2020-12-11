import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { HistoryConst } from '~/Constant'
import { IHistoryItem } from '~/types'

interface IState {
  weekday: number[]
  value: string
  events: any[]
  colors: string[]
  names: string[]
}

export const useState = () => reactive<IState>({
  weekday: [0, 1, 2, 3, 4, 5, 6],
  value: '1895-01-01',
  events: [],
  colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
  names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
})

export const useComputed = (context: SetupContext, state: IState) => ({
  nowMonth: computed(() => {
    return dayjs(state.value, 'YYYY-MM-DD').format('YYYY-MM')
  }),
  eventList: computed(() => {
    const data = context.root.$store.getters[`history/${HistoryConst.$Get.List}`]

    return data.map((item: IHistoryItem) => {
      return {
        color: 'green',
        end: item.date,
        start: item.date,
        timed: false,
        ...item,
      }
    })
  })
})

export const useGetEventColor = () => (event: any) => {
  return event.color
}

export const useRnd = () => (a: number, b: number) => {
  return Math.floor((b - a + 1) * Math.random()) + a
}

export const useGetEvents = (state: IState, rnd: any) => ({ start, end }: any) => {
  const events = []

  const min = new Date(`${start.date}T00:00:00`)
  const max = new Date(`${end.date}T23:59:59`)
  const days = (max.getTime() - min.getTime()) / 86400000
  const eventCount = rnd(days, days + 20)

  for (let i = 0; i < eventCount; i++) {
    const allDay = rnd(0, 3) === 0
    const firstTimestamp = rnd(min.getTime(), max.getTime())
    const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000
    const second = new Date(first.getTime() + secondTimestamp)

    events.push({
      name: state.names[rnd(0, state.names.length - 1)],
      start: first,
      end: second,
      color: state.colors[rnd(0, state.colors.length - 1)],
      timed: false,
    })
  }

  state.events = events
}
