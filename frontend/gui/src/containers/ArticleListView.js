import React, { Component } from 'react'
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

  componentDidMount () {
    axios.get('http://127.0.0.1:8000/api/')
      .then(response => {
        this.setState({
          articles: response.data
        })
        console.log(response.data)
      })
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

export default ArticleList
