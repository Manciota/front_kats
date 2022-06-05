import HttpClient from './utils/HttpClient'

class PetsService {
  constructor() {
    this.httpClient = new HttpClient('https://miakhats.herokuapp.com/pets')
  }

  async getAllPets() {
    return this.httpClient.get('')
  }

  async createPet() {
    return this.httpClient.post('/create')
  }
}

export default new PetsService()
