export default class AuthService {
    constructor(domain) {
        this.domain = domain || 'https://api.mediaverse-dev.nl'
        // this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    login(email, password) {
            // ?email=${email}&password=${password}
        return this.fetch(`/shop/api/v1/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(function(response) {
            // The response is a Response instance.
            // You parse the data into a useable format using `.json()`
            return response;
        })
        //     .then(function(data) {
        //     // `data` is the parsed version of the JSON returned from the above endpoint.
        //     console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        // });
    }

    loggedIn(){
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token;
            // && !isTokenExpired(token) // handwaiving here
    }

    setProfile(profile){
        // Saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile))
    }

    getProfile(){
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(localStorage.profile) : {}
    }

    setToken(idToken){
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken(){
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout(){
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }

    _checkStatus(response) {
        console.log('error check')
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            console.log('no error')
            return response
        } else {
            console.log('error for sure')
            var error = response
            console.log('error for sure', error)

            error.response = response

            console.log('end error for sure')

            throw error
        }
    }

    fetch = (url, options) => {
        // performs api calls sending the required authentication headers
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        if (this.loggedIn()){
           headers['Authorization'] = 'Bearer ' + this.getToken()
        }
        const ComHeaders = {...headers, ...options};

        console.log(url, 'url');
        // console.log([...headers, ...options], 'header');
        return fetch(url, ComHeaders)
            // .then(this._checkStatus)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log('no error')
                    return response.json();
                }else if(response.status >= 422){
                    console.log('fields are incorrect')
                    return response.json()
                }  else {
                    console.log('error')
                    return response
                }
            })
            //  .then(response => {
            //     return response;
            // })
    }
}