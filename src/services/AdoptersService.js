import HttpClient from './utils/HttpClient'

class AdoptersService {
  constructor() {
    this.httpClient = new HttpClient('https://miakhats.herokuapp.com/adopters')
  }

  async makeAdoption(data) {
    console.log(data)
    return this.httpClient.post('/create', data)
  }
}

export default new AdoptersService()
