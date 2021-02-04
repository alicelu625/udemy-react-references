import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    //using dynamic import syntax - only imports when function is executed (when render AsyncNewPost)
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: false //cannot access NewPosts page if false
    }

    render () {
        return (
            <div className="Blog">
                {/*links*/}
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit', //jump to any id:submit we have in the element
                                search: '?quick-submit=true' //add query params
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" exact render={() => <h1>Home2</h1>}/>*/}
                <Switch>
                    {/*check if auth is true or not*/}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts/" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;