import React from 'react';
import { connect } from 'react-redux'
import { updatePost, addPost } from '../actions/posts'
import { Form } from 'semantic-ui-react';
import bart from './bart.png';
class PostForm extends React.Component {
defaultValues = { content:'', author:'', avatar:'', title:''}
state = { ...this.defaultValues };
  

  componentWillMount() {
    if (this.props.id) 
      this.setState({ ...this.props })
  }
 
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    closeForm()
  }

  render() {
    const { content, author, title, avatar } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="content"
          defaultValue={content}
          onChange={this.handleChange}
          label="Content:"
          required
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author:"
          required 
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);