import React, { Component } from 'react';
import Side from '../components/Side';
import { sendRequest } from '../services/sendRequest';
import Form from '../components/Form';

export default class Main extends Component {
  state = {
    url: '',
    method: 'GET',
    responseBody: [],
    history: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, method, history } = this.state;
    const response = await sendRequest(url, method);
    history.push({url, method});
    this.setState({ responseBody: response });
  }

  async componentDidMount() {
  }

  render() {
    const { url, method, responseBody, history } = this.state;
    return (
      <main className="grid grid-cols-12 top-12 w-full bottom-0">
        <Form 
          url={url} 
          method={method} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          responseBody={responseBody} />
        
        <ul className="col-span-4 text-white mt-12 p-8 w-full">
          <Side
            history={history}
          />
        </ul>
      </main>
    )
  }
}