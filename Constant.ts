export const MainConst = {
  $Set: {
    TodayAddPerson: 'SET/TODAY/ADD/PERSON',
    TodayPerson: 'SET/TODAY/PERSON',
    NameAndImage: 'SET/PERSON/FACE',
  },
  $Call: {
    Item: 'CALL/ITEM',
  },
  $Get: {
    TodayAddPerson: 'GET/ADD/LIST',
    TodayPerson: 'GET/TODAY/PERSON',
    NameAndImage: 'GET/PERSON/FACE',
  },
}

export const PersonConst = {
  $Set: {
    List: 'SET/LIST',
    Item: 'SET/ITEM',
    Total: 'SET/TOTAL',
  },
  $Call: {
    List: 'CALL/LIST',
    Item: 'CALL/ITEM',
  },
  $Get: {
    List: 'GET/LIST',
    Item: 'GET/ITEM',
    Total: 'GET/TOTAL',
  },
}

export const SourceConst = {
  $Set: {
    Item: 'SET/ITEM',
  },
  $Call: {
    Item: 'CALL/ITEM',
  },
  $Get: {
    Item: 'GET/ITEM',
  },
}

export const HunkukConst = {
  $Set: {
    List: 'SET/LIST',
  },
  $Call: {
    List: 'CALL/LIST',
  },
  $Get: {
    List: 'GET/LIST',
  },
}

export const WorkConst = {
  $Set: {
    List: 'SET/LIST',
  },
  $Call: {
    List: 'CALL/LIST',
  },
  $Get: {
    List: 'GET/LIST',
  },
}

export const TodayPersonConst = {
  $Set: {
    List: 'SET/LIST',
    Count: 'SET/LIST/COUNT',
    UpList: 'SET/LIST/DOWN',
    DownList: 'CALL/LIST/DOWN',
  },
  $Call: {
    List: 'CALL/LIST',
    Count: 'CALL/LIST/COUNT',
    UpList: 'CALL/LIST/UP',
    DownList: 'CALL/LIST/DOWN',
  },
  $Get: {
    List: 'GET/LIST',
    Count: 'GET/LIST/COUNT',
  },
}

export const HistoryConst = {
  $Set: {
    Item: 'SET/ITEM',
    List: 'SET/LIST',
  },
  $Call: {
    Item: 'CALL/ITEM',
    List: 'CALL/LIST',
    Detail: 'CALL/DETAIL',
  },
  $Get: {
    Item: 'GET/ITEM',
    List: 'GET/LIST',
  },
}
