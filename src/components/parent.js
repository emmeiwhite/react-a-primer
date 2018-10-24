import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Parent extends Component{
    constructor(props){
        super(props);
        console.log('Parent -- Constructor');
        this.state = {
            // Empty State Initially, componentDidMount() will be used to fetch tehe data from a remote API
            posts:[],
            parent_money:props.money // Only once, Initially while this compoent renders the constructor runs not always
            // Note that we are passing props and trying to set parent-money field of the state to the updated prop, which 
            // is not updating at all.Let's directly check whether there occurs a reRendering on directly using the updated props
        }
    }

    componentWillMount(){
        const {money} = this.props;
        console.log(`Parent -- componentWillMount * Prop Passed ${money}`)
    }

    componentDidMount(){
        console.log(`Parent -- ComponentDidMount, * Prop Passed ${this.props.money}`);
        // Any Ajax calls goes here
        const promise = fetch('https://jsonplaceholder.typicode.com/posts');

        promise.then(function(res){
            // console.log(res); This here is again a promise, so we have to return it and use another then to get the data
            return res.json(); // We are returning a Promise again which will now be resolved for the data
        }).then(data => {
            this.setState({
                posts:data
            })
        })
        .catch(err=>console.log(err));
    }

    render(){

        console.log("Parent -- Render Method");

        if(!this.state.posts){
            return(
                <h1>Loading ...</h1>
            )
        }
        return (
            
            <div>
                <h1>{this.state.parent_money}</h1>

                

                {this.props.playAround()} {/* what if we use : this.props.playAround, we'll get warning */}

                <ul>       
                    {
                        this.state.posts.map((posts)=>{
                            return <li key={posts.id}>{posts.title}</li>
                        })
                    } 
                </ul>
                
            </div>

            // Since No Other Component is rendering within the Parent, Now componentDidMount() will be called, which inturn makes an AJAX call to an API
        )
    }
}

Parent.propTypes = {
    money:PropTypes.number,
    playAround:PropTypes.func
}

export default Parent;