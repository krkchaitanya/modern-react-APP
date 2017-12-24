import React, { Component } from 'react';
import axios from "axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.css';

class Blog extends Component {
// component did mount help in re rendering ....updating the state....performing http request...cause side effect ..in updating state data

componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response);
    })
}

render () {
        return (
            <div>
                <h3>Modetn-React-Http</h3><br/>
                <section className={classes.Posts}>
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;