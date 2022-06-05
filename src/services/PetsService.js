import HttpClient from './utils/HttpClient'

class PetsService {
  constructor() {
    this.httpClient = new HttpClient('https://miakhats.herokuapp.com/pets')
  }

  async getAllPets() {
    return this.httpClient.get('')
  }

  async createPet(petInfo) {
    return this.httpClient.post('/create', { body: petInfo })
  }
}

export default new PetsService()
