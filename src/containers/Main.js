import React, { Component } from 'react';
import Side from '../components/Side';
import { sendRequest } from '../services/sendRequest';
import Form from '../components/Form';

export default class Main extends Component {
  state = {
    url: '',
    method: 'GET',
    body: 'Response body...'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, method } = this.state;
    const response = await sendRequest(url, method);
    this.setState({ body: response });
  }

  async componentDidMount() {
  }

  render() {
    const { url, method, body } = this.state;
    return (
      <main className="grid grid-cols-12 top-12 w-full bottom-0">
        <Form 
          url={url} 
          method={method} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          body={body} />
        <Side />
      </main>
    )
  }
}