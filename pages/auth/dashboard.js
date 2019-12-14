// ./pages/dashboard.js
// example of a protected page
import React, {Component} from 'react'

import withAuth from  '../../utils/withAuth'

class Dashboard extends Component {
    render() {
        const user = this.props.auth.getProfile()
        return (
            <div>Current user: {user.email}</div>
        )
    }
}

export default withAuth(Dashboard) 