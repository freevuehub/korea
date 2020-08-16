const PTOTOCOL = process.env.API_PROTOCOL
const URL = process.env.API_URL
const SERVER = `${PTOTOCOL}${URL}`

interface IConfig {
  person: {
    request: {
      list(): string
      item(id: number): string
    }
  }
}

const config: IConfig = {
  person: {
    request: {
      list: () => `${SERVER}/person`,
      item: (id) => `${SERVER}/person/${id}`,
    },
  },
}

export default config
