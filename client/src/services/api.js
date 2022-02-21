import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:5000',
    headers: {'Accept': 'application/json'}
  })


  const submitScheduleInterface = (backendType, data) => {
    switch(backendType){
      case 'localhost':
        localhostApi(data);
        break;
      case 'firebase':
        //use firebase functions
        break;
      default:
        break;
    }
  }

  const localhostApi = (data) => {
    instance.post('/schedule', data)
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  export { submitScheduleInterface }