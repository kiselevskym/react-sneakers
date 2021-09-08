import axios from "axios";

export default {
    fetchItems: () => {
        return axios.get("http://localhost:3003/footwear")
    }
}


