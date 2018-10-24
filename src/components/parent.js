import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Parent extends Component{
    constructor(props){
        super(props);

        this.state = {
            // Empty State Initially, componentDidMount() will be used to fetch tehe data from a remote API
            posts:[],
            // parent_money:props.money 
            // Note that we are passing props and trying to set parent-money field of the state to the updated prop, which 
            // is not updating at all.Let's directly check whether there occurs a reRendering on directly using the updated props
        }
    }

    componentDidMount(){
        console.log(this.props.money);
        const promise = fetch('https://jsonplaceholder.typicode.com/posts');

        promise.then(function(res){
            // console.log(res); This here is again a promise, so we have to return it and use another then to get the data
            return res.json(); // We are returning a Promise again which will now be resolved for the data
        }).then(data => {
            console.log(data)
            this.setState({
                posts:data
            })
        })
        .catch(err=>console.log(err));
    }

    render(){
        if(!this.state.posts){
            return(
                <h1>Loading ...</h1>
            )
        }
        return (
            <ul>
                 <h1>{this.props.money}</h1>
                {
                    this.state.posts.map((posts)=>{
                        return <li key={posts.id}>{posts.title}</li>
                    })
                } 
            </ul>
        )
    }
}

Parent.propTypes = {
    money:PropTypes.number
}

export default Parent;