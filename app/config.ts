// class Config { 
//   public Host: 'http://localhost:1337'
// }

let config = {
  host: 'http://localhost:1337',
  route: {

    server: {
      drink: 'dish'
      , drinkFullDetail: 'dishFullDetail'
      , material: 'material'
      , income: 'income'
      , incomeFullDetail: 'incomeFullDetail'
      , incomeLite: 'incomeLite'
      , people: 'person'
    }
    , client: {
      drink: 'drinks'
      , material: 'materials'
      , budget: {
        income: {
          daily: 'daily'
          , monthly: 'monthly'
          , yearly: 'yearly'
          , url: 'income'
        }
        , expense: {
          daily: 'daily'
          , monthly: 'monthly'
          , yearly: 'yearly'
          , url: 'expense'
        }
      }
      , commonAction: {
        add: 'add'
        , edit: 'edit'
      }
    }
  }
}

export const Config = config;
