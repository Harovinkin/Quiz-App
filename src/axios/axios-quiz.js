import Axios from "axios";

export default Axios.create({
  baseURL: 'https://react-quiz-46e2a.firebaseio.com'
})