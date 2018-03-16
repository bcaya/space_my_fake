import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import './App.css'
import axios from 'axios';


class Home extends Component {

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => this.setState({ posts: res.data }) )
    }
  render() {
    return (
      <div className="bods">
      <Header as='h1' textAlign='left'>SpaceMy <Link to="/posts"> The *cosmic* </Link> place for friends</Header>
      </div>
    );
  }
}

export default Home;
