import React, { Component } from 'react';
import { Route} from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost"; 

class Blog extends Component {
// component did mount help in re rendering ....updating the state....performing http request...cause side effect ..in updating state data
        
render () {


        return (
            <div>
                <h3>Modern-React-Http</h3><br/>
                {/* <section className={classes.Posts}>
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
                
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post"exact component={NewPost } />
                <Route path="/:id" exact component={FullPost} />

            </div>
        );
    }
}

export default Blog;