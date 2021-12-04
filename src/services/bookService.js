import axios from "axios";
import { API_URL } from "../common/constants";

export const bookService = {
  async fetchBooks() {
    const { data } = await axios.get(`${API_URL}/Books`);

    return data;
  }
}
