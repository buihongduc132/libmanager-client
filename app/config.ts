// class Config { 
//   public Host: 'http://localhost:1337'
// }

let config = {
  host: 'http://localhost:1337',
  route: {

    server: {
      drink: {
        list: 'dish'
      }
      , material: {
        list: 'material'
      }
    }
    , client: {
      drink: {
        list: 'drinks'
      }
      , material: {
        list: 'materials'
      }
      , commonAction: {
        add: 'add'
        , edit: 'edit'
      }
    }
  }
}

export const Config = config;