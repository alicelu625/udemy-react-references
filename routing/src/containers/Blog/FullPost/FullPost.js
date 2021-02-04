import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    
    //only executed once - component itself didn't change
    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    //handle change in here if post component is already loaded through routing
    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        //extract route parameters
        if(this.props.match.params.id) {
            //avoid infinite loop: check if we don't already have a post loaded OR have a loaded post & id that we got by props
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                        //console.log(response);
                    });
            } 
        }
    }

    deletePostHandler = () => {
        //target specific post
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }
    
    render () {
        //default post
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        //if has id but post isn't loaded with data yet
        if (this.props.match.params.id) {
            post = <p style={{textAlign: "center"}}>Loading...!</p>;
        }
        //post is loaded with data
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }    
        return post;
    }
}

export default FullPost;