import React, { Component } from 'react';
import axios from "axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.css';

class Blog extends Component {
// component did mount help in re rendering ....updating the state....performing http request...cause side effect ..in updating state data

state={
    posts:[],
    selectedPostId:null
}

componentDidMount() {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        const posts=response.data.slice(0,4);
        const updatedPosts=posts.map((post)=>{
            return{
                ...post,
                author:'krish'
            }
        })

        this.setState({
            posts:updatedPosts
        })
        // console.log(response);
    })
}


postSelectedHanlder=(id)=>{
 this.setState({
     selectedPostId:id
 })
}

render () {

    const posts=this.state.posts.map((post)=>{
        return <Post title={post.title} author={post.author} key={post.id}  clicked={()=>this.postSelectedHanlder(post.id)}/>
    })

        return (
            <div>
                <h3>Modetn-React-Http</h3><br/>
                <section className={classes.Posts}>
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