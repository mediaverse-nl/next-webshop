import nextAuth from 'next/auth'
import parseScopes from './parseScopes'

const Loading = () => <div>Loading...</div>

export default nextAuth({
    url: 'https://api.mediaverse-dev.nl',
    tokenEndpoint: '/oauth/token',
    profileEndpoint: '/api/me',
    getTokenFromResponse: (res) => res.id_token,
    getProfileFromResponse: (res) => res,
    parseScopes,
})

// import React, {Component} from 'react'
// import AuthService from './AuthService'
//
// export default function withAuth(AuthComponent) {
//     const Auth = new AuthService('https://api.mediaverse-dev.nl')
//     return class Authenticated extends Component {
//         constructor(props) {
//             super(props)
//             this.state = {
//                 isLoading: true
//             };
//         }
//
//         componentDidMount () {
//             if (!Auth.loggedIn()) {
//                 this.props.url.replaceTo('/')
//             }
//             this.setState({ isLoading: false })
//         }
//
//         render() {
//             return (
//                 <div>
//                     {this.state.isLoading ? (
//                         <div>LOADING....</div>
//                     ) : (
//                         <AuthComponent {...this.props}  auth={Auth} />
//                     )}
//                 </div>
//             )
//         }
//     }
// }