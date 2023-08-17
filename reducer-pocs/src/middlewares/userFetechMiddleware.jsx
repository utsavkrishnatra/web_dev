
async function userFetchMiddleware(dispatch){
   let resp= await fetch('https://jsonplaceholder.typicode.com/users/1');
   console.log(typeof(resp),resp);
   let users =await resp.json();

   dispatch({
        type:"success_data",
        payload:users
   })

}

export default userFetchMiddleware;