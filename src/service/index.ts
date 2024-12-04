import axios from "axios";

export default class EndPointAccess {
  theUrl: string;
  constructor(url: string) {
    this.theUrl = url;
  }
  async getResponse() {
    // parameter axios.get(isi dengan URL);
    const response = await axios.get(this.theUrl);
    // mengembalikan hasil get axios;
    return response;
  }
}
