import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    if (this.props.token !== null) {
      axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: this.props.token
      }
      const { articleID } = this.props.match.params
      axios.delete(`https://djreact-blog.herokuapp.com/api/${articleID}/`)
      this.props.history.push('/')
    } else {
      // Show some kind of message
    }
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
    if (newProps.token) {
      axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: newProps.token
      }
      const { articleID } = this.props.match.params
      axios.get(`https://djreact-blog.herokuapp.com/api/${articleID}/`)
        .then(response => {
          this.setState({
            article: response.data
          })
        })
    }
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

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(ArticleDetail)
