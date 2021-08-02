import React, { Component } from 'react';

export default class Main extends Component {

  render() {
    return (
      <div className="col-span-8 p-12 mt-12">
        <section className="bg-white p-20 rounded-2xl shadow-lg">
          <h1 className="text-3xl mb-8">Super RESTed Postwoman</h1>
          <div className="grid grid-cols-12 mb-4">
            <input placeholder="URL..."
              className="border-2 px-2 py-1 w-full border-gray-400 border-opacity-50 rounded-md col-span-10"></input>
            <button className="col-span-2 bg-red-400 ml-4 rounded-full text-white">Go</button>
          </div>
          <form>
            <label>
              <input type="radio" name="method" className="hidden" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">GET</span>
            </label>
            <label>
              <input type="radio" name="method" className="hidden" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">POST</span>
            </label>
            <label>
              <input type="radio" name="method" className="hidden" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">PUT</span>
            </label>
            <label>
              <input type="radio" name="method" className="hidden" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">PATCH</span>
            </label>
            <label>
              <input type="radio" name="method" className="hidden" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">DELETE</span>
            </label>
            <button></button>
          </form>
          <div 
            className="border-2 border-gray-400 border-opacity-50 rounded-md w-full h-72 p-4 mt-4">
              <pre>
                Response body...
              </pre>
            </div>
        </section>
      </div>
    )
  }
}