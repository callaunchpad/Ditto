import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const apiUrl = 'https://dittobackend-production.up.railway.app';
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

export const uploadPet = (file: File) => {

  return getData('/numpokemon').then((response) => {

    const fileName = `Pet${response + 1}.${file.name.split('.').pop()}`;
    const storageRef = ref(storage, `Pets/${fileName}`);

    return uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!' + fileName);
      return postData('/generate', { name: fileName })
      .then((data) => {
        console.log(data); 
        return data
      });
    });
  })
}


export const getRandomTwo = () => {

  console.log(apiToken)

  return getData('/randomtwo').then((response) => {
    return response;
  })
}

// WINNER = 0 means name1 won, WINNER = 1 means name2 won
export const updateElo = (name1: String, name2: String, winner: Number) => {

  postData('/updateelo', {name1: name1, name2: name2, winner: winner}).then((data) => {
    console.log(data);
  })

}

export const getTopTen = () => {

  return getData('/topten').then((data) => {
    console.log(data)
    return data;
  })

}

async function postData(url = '', data = {}) {
  const response = await fetch(apiUrl + url, {
    method: 'POST', 
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${apiToken}`
    },
    body: JSON.stringify(data) 
  });
  return response.json();
}

async function getData(url = '') {
  const response = await fetch(apiUrl + url, {
    method: 'GET', 
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${apiToken}`
    }
  });
  return response.json();
}

