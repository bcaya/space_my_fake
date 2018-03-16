import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import { Button, Comment, Form } from 'semantic-ui-react'
class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Comment key={post.id}>
        <Comment.Avatar src={post.avatar} />
        <Comment.Content>
        <Comment.Author as='a'>{post.author}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
          <Comment.Text>{post.content}</Comment.Text>  
          <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
          
    )
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
           <Grid.Column floated='right' width={7}>
        <Header as="h3" textAlign="right">Posts</Header>
          <Comment.Group>
           { this.posts() }
            <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
          </Comment.Group>
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