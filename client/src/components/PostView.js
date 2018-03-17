import React from 'react';
import { connect } from 'react-redux';
import {
  Divider, Header, Segment, Image, Container, Button, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

class PostView extends React.Component {
  state = { showForm: false };

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm };
    });
  };

  render() {
    const { showForm } = this.state;
    const { post = {} } = this.props;

    return (
       <div>
         <Container textalign="left">
          <Grid>
            <Grid.Row>
              <Grid.Column floated="right" width={7}>
          {showForm ? (
            <PostForm {...post} closeForm={this.toggleForm} />
          ) : (
               <div>
                <Header as="h1" textAlign="left">
                  {post.user}
                </Header>
                <Segment as="h5" textAlign="left">
                  <Header as="h3" textAlign="left">
                    {post.subject}
                  </Header>
                  {post.content}
                </Segment>
                <Segment textalign="left">
                  <Link to="/posts">View All Comments</Link>
                </Segment>
              </div>  
                    )}
              <Button color="orange" compact onClick={this.toggleForm}>
                {showForm ? 'Cancel' : 'Edit'}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(
      p => p.id === parseInt(props.match.params.id),
    ),
  };
};

export default connect(mapStateToProps)(PostView);
