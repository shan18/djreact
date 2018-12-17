import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Articles from '../components/Article'
import CustomForm from '../components/Form'

class ArticleList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: newProps.token
      }
      axios.get('https://djreact-blog.herokuapp.com/api/')
        .then(response => {
          this.setState({
            articles: response.data
          })
          console.log(response.data)
        })
    }
  }

  render () {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create an Article</h2>
        <CustomForm requestType='post' articleID={null} btnTxt='Create' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(ArticleList)
