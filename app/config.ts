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
    }
    , client: {
      drink: 'drinks'
      , material: 'materials'
      , commonAction: {
        add: 'add'
        , edit: 'edit'
      }
    }
  }
}

export const Config = config;