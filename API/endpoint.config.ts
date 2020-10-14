const PTOTOCOL = process.env.API_PROTOCOL
const URL = process.env.API_URL
const SERVER = `${PTOTOCOL}${URL}`

interface IConfig {
  main: {
    request: {
      item(): string
    }
  }
  person: {
    request: {
      list(): string
      item(id: number): string
    }
  }
  source: {
    request: {
      item(id: number): string
    }
  }
  hunkuk: {
    request: {
      list(): string
    }
  }
  work: {
    request: {
      list(): string
    }
  }
}

const config: IConfig = {
  main: {
    request: {
      item: () => `${SERVER}/main`,
    },
  },
  person: {
    request: {
      list: () => `${SERVER}/person`,
      item: (id) => `${SERVER}/person/${id}`,
    },
  },
  source: {
    request: {
      item: (id) => `${SERVER}/source/${id}`,
    },
  },
  hunkuk: {
    request: {
      list: () => `${SERVER}/hunkuk`,
    },
  },
  work: {
    request: {
      list: () => `${SERVER}/work`,
    },
  },
}

export default config
