import React from "react";
import axios from "axios";  
import Post from "../../../components/Post/Post";
import classes from "./Posts.css";
import {Link , Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";


class Posts extends React.Component{
    state={
        posts:[],
        selectedPostId:null,
        error:false
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
                });
            
                this.setState({
                    posts:updatedPosts
                })
             }).catch((error)=>{
                    this.setState({
                        error:true
                    })
                })
                // console.log(response);
        }
        

    postSelectedHanlder=(id)=>{
        this.setState({
            selectedPostId:id
        })
       }

        render(){
            let posts=<p style={{textAlign:'center'}}>Something went wrong</p>
            
                if(!this.state.error){
                 posts=this.state.posts.map((post)=>{
                        return (
                                <Link to={'/'+post.id} key={post.id}> <Post 
                                    title={post.title}
                                     author={post.author} 
                                     key={post.id}  
                                     clicked={()=>this.postSelectedHanlder(post.id)}
                                /></Link>
                        )
                    })
                }

            return(
            <div>    
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url+"/:id"} exact component={FullPost} /> 
            </div> 
            )
        }
}
export default Posts;