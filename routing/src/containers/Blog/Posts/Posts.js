import React, {Component} from 'react';
import axios from '../../../axios';
//import {Link} from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
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
                //this.setState({error: true})
                //console.log(error);
            });
    }
    
    postSelectedHandler = (id) => {
        //push page onto stack of pages (navigation)
        this.props.history.push('/posts/' + id);
        //alternative: this.props.history.push({pathname: '/posts/' + id}); 
        //using Link: this.setState({selectedPostId: id});
    }

    render() {
        //if there was an error, send message
        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        //if there was no error, set post
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                //using click handler as an alternative navigation instead of Link
                return (//<Link to={'/' + post.id} key={post.id}>
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                //</Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                {/*select specific post with route parameter*/}
                {/*nested route*/}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                {/*<Route path="/posts/:id" exact component={FullPost} />*/}
            </div>
            
        );
    }
}

export default Posts;