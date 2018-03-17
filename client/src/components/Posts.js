import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { getPosts, addPost } from '../actions/posts';
import { Container, Grid, Header, Image, Divider } from 'semantic-ui-react';
import { Button, Comment, Form } from 'semantic-ui-react'
import axios from 'axios'
import PostForm from './PostForm'

class Posts extends React.Component {
  state = { showForm: false };

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm };
    });
  };
  componentDidMount(){
    this.props.dispatch(getPosts())
  }
  

  posts = () => {
    return this.props.posts.map(post => (
      <Comment key={post.id}>
        <Comment.Avatar src={post.avatar} />
        <Comment.Content>
        <Comment.Author as='a'>{post.author}</Comment.Author>
        
          <Comment.Text>{post.content}</Comment.Text>  
          <Comment.Actions>
        </Comment.Actions>
        <Comment.Metadata>
          <div>Posted....sometime</div>
        </Comment.Metadata>
      </Comment.Content>
    </Comment>
    )   
    )
  }

  render() {
    const { showForm } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column floated="right" width={7}>
              <Header as="h1" textAlign="right">
                🚀 👽
              </Header>
              <Button color='olive' compact onClick={this.toggleForm}>
                {showForm ? 'Nevermind' : 'Add A Comment'}
              </Button>
              {showForm ? (
                <PostForm closeForm={this.toggleForm} />
              ) : (
                <div>{this.posts()}</div>
              )}
          </Grid.Column>
        </Grid.Row>
     </Grid>
  </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { posts: state.posts }
  }

export default connect(mapStateToProps)(Posts);