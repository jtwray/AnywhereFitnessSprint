import axios from 'axios';

export const axiosWithAuth=() => {
  const token=localStorage.getItem( 'token' );
  console.log( 'token', token );
  return axios.create( {
    baseURL: "https://shrouded-ravine-79614.herokuapp.com/https://lambda-anywhere-fitness.herokuapp.com/api",
    headers: {
      Authorization:token,
      contentType:'application/json',
      
      
    }
  } );
};
