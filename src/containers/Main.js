import React, { Component } from 'react';
import Side from '../components/Side';
import { sendRequest } from '../services/sendRequest';
import Form from '../components/Form';

export default class Main extends Component {
  state = {
    url: '',
    method: 'GET',
    reqBody: '',
    resBody: [],
    history: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, method, history, reqBody } = this.state;
    const response = await sendRequest(url, method, reqBody);
    history.push({url, method});
    this.setState({ resBody: response });
  }

  async componentDidMount() {
  }

  render() {
    const { url, method, reqBody, history, resBody } = this.state;
    return (
      <main className="grid grid-cols-12 top-12 w-full bottom-0">
        <Form 
          url={url} 
          method={method} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          reqBody={reqBody}
          resBody={resBody} />
        
        <ul className="col-span-4 text-white mt-12 p-8 w-full">
          <Side
            history={history}
          />
        </ul>
      </main>
    )
  }
}