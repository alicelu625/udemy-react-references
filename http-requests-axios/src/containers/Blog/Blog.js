import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    
    componentDidMount () {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4); //only get posts 1-4
                const updatedPosts = posts.map(post => {
                    return { //new JS object
                        ...post, //distribute properties of posts
                        author: 'Max' //new property
                    }
                })
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
            .catch(error => {
                this.setState({error: true})
                //console.log(error);
            });
    }
    
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        //if there was an error, send message
        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        //if there was no error, set post
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;