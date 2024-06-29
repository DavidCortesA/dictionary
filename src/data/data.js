import axios from "axios";

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export default async function dictionary (name) {
  try {
      const response = await axios.get(URL + name)
      return response.data
  } catch (error) {
      console.log(error);
      return null
  }
}