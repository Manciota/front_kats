import HttpClient from './utils/HttpClient'

class AdoptersService {
  constructor() {
    this.httpClient = new HttpClient('https://miakhats.herokuapp.com/adopters')
  }

  async makeAdoption(data) {
    return this.httpClient.post('/create', { body: data })
  }
}

export default new AdoptersService()
