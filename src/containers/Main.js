import React, { Component } from 'react';
import Side from '../components/Side';
import { sendRequest } from '../services/sendRequest';
import InputsOutputs from './InputsOutputs';

export default class Main extends Component {
  state = {
    url: '',
    method: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    const { url, method } = this.state;
    console.log('submitted');
  }

  async componentDidMount() {
    console.log('component did mount');
  }

  render() {
    const { url, method } = this.state;
    return (
      <main className="grid grid-cols-12 top-12 w-full bottom-0">
        <InputsOutputs url={url} method={method} onChange={this.handleChange} />
        <Side />
      </main>
    )
  }
}