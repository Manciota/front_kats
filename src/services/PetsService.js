import HttpClient from './utils/HttpClient'

class PetsService {
  constructor() {
    this.httpClient = new HttpClient('https://miakhats.herokuapp.com/pets')
  }

  async getAllPets() {
    return this.httpClient.get('')
  }

  async createPet(petInfo) {
    return this.httpClient.postMultiPart('/create', { body: petInfo })
  }

  async deletePet(petId) {
    return this.httpClient.delete(`/remove/${petId}`)
  }
}

export default new PetsService()
