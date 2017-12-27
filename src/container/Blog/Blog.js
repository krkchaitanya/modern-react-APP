import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";


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


                {/* order is important while placing routes........Switch only deals in loading only one Route exact......*/}
                <Switch>
                    <Route path="/new-post"exact component={NewPost } />
                    <Route path="/" component={Posts}/>  
                </Switch>
            </div>
        );
    }
}

export default Blog;