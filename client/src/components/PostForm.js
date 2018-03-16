import React from 'react';
import { connect } from 'react-redux'
import { updatePost, addPost } from '../actions/posts'
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = { 
    content: '', 
    author: '',
    title:'',
  }

  state = {...this.initialState}

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
    const { title, content, author } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="content"
          defaultValue={content}
          onChange={this.handleChange}
          label="Content"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);