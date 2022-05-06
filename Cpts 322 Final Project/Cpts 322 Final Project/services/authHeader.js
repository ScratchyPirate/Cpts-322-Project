// for retrieving data from server. In the case we access protected resources, 
// the HTTP request needs Authorization header.

// checks Local Storage for user item. If there is a logged in User 
// with accessToken (JWT), return HTTP Authorization header. 
// Otherwise, return an empty object.
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      // for Node.js Express back-end DB.
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }