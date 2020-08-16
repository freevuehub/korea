const PTOTOCOL = process.env.API_PROTOCOL
const URL = process.env.API_URL
const SERVER = `${PTOTOCOL}${URL}`

interface IConfig {
  person: {
    request: {
      list(): string
    }
  }
}

const config: IConfig = {
  person: {
    request: {
      list: () => `${SERVER}/person`,
    },
  },
}

export default config
