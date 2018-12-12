import React, { Component } from 'react'
import axios from 'axios'
import { Button, Card } from 'antd'

import CustomForm from '../components/Form'

class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: {}
    }
  }

  handleDelete = (event) => {
    const { articleID } = this.props.match.params
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
    this.props.history.push('/')
  }

  componentDidMount () {
    const { articleID } = this.props.match.params
    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(response => {
        this.setState({
          article: response.data
        })
      })
  }

  render () {
    const { article } = this.state
    return (
      <div>
        <Card title={article.title}>
          <h3>{article.description}</h3>
          <p>{article.content}</p>
        </Card>
        <br />
        <h2>Update the Article</h2>
        <CustomForm requestType='put' articleID={this.props.match.params.articleID} btnTxt='Update' />
        <form onSubmit={this.handleDelete}>
          <Button type='danger' htmlType='submit'>Delete</Button>
        </form>
      </div>
    )
  }
}

export default ArticleDetail
