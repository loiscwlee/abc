import React from 'react';
import Post from './Post';
import './style.css';

class PostList extends React.Component {

    // setup
    constructor(props){
        super(props);
        this.state = {
            posts : []
                

        }
    }
    componentDidMount(){
        fetch('https://cdn.oneshop.cloud/lesson5_api_3.json',
        {
            method : 'get'
        }
       )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                posts : data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }   

    // rendering
    render(){
        return (
            <div>
                <div className="nav">Posts</div>
                <div className="post-list">
                    {this.state.posts.map((a) => {
                        return (
                            <Post 
                                title={a.content.title} 
                                description={a.description}
                                thumbnail={a.post.image.thumbnail}
                            /> 
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default PostList;

