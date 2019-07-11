import React from 'react';
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props){
    return(
        <div >
            {props.location.pathname === '/' ? null : <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>}
        </div>
    )
}
function mapStateToProps(state){
    let {username, profilePic} = state
    return {
        username,
        profilePic
    }
}
// const mapDispatchToProps = {
    
// }
export default withRouter(connect(mapStateToProps, {})(Nav));