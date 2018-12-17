import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import axios from 'axios'

const FormItem = Form.Item

class CustomForm extends React.Component {

  handleFormSubmit = (event, requestType, articleID) => {
    const title = event.target.elements.title.value
    const description = event.target.elements.description.value
    const content = event.target.elements.content.value
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: this.props.token
    }
    switch (requestType) {
      case 'post':
        return axios.post('https://djreact-blog.herokuapp.com/api/', {
          title: title,
          description: description,
          content: content
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
      case 'put':
        return axios.put(`https://djreact-blog.herokuapp.com/api/${articleID}/`, {
          title: title,
          description: description,
          content: content
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }

  render () {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
          <FormItem label='Title' >
            <Input name='title' placeholder='Type your titile' />
          </FormItem>
          <FormItem label='Description' >
            <Input name='description' placeholder='Small description of your titile' />
          </FormItem>
          <FormItem label='Content' >
            <Input name='content' placeholder='Your content' />
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit'>{this.props.btnTxt}</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(CustomForm)
