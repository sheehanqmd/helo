import React, { Component } from "react";
import axios from 'axios'


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            myPosts: true
        }
    }
    componentDidMount(){
        axios.get(`/api/user-posts`)
    }
    updateSearch(e){
        this.setState({searchInput: e})
    }
    render(){
        return(
            <div>
                <input placeholder='Search by title..' value = {this.state.searchInput} onChange={(e) => this.updateSearch(e.target.value)}/>
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Dashboard;