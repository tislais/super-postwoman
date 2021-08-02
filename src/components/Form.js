import React from 'react';
import ReactJson from 'react-json-view'

const Form = ({ url, onChange, onSubmit, responseBody, method }) => {

  return (
      <div className="col-span-8 p-12 mt-12">
        <section className="bg-white p-20 rounded-2xl shadow-lg">

          <h1 className="text-3xl mb-8">Super RESTed Postwoman</h1>

          <form onSubmit={onSubmit}>

            <div className="grid grid-cols-12 mb-4">
              <input placeholder="URL..."
                className="border-2 px-2 py-1 w-full border-gray-400 border-opacity-50 rounded-md col-span-10"
                type="text"
                onChange={onChange}
                name="url"
                value={url}></input>
              <button 
                className="col-span-2 bg-red-400 ml-4 rounded-full text-white">Go</button>
            </div>


            <label>
              <input type="radio" name="method" className="hidden"
                defaultChecked onChange={onChange} value="GET" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">GET</span>
            </label>

            <label>
              <input type="radio" name="method" className="hidden"
                onChange={onChange} value="POST" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">POST</span>
            </label>

            <label>
              <input type="radio" name="method" className="hidden"
                 onChange={onChange} value="PUT" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">PUT</span>
            </label>

            <label>
              <input type="radio" name="method" className="hidden"
                 onChange={onChange} value="PATCH" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">PATCH</span>
            </label>

            <label>
              <input type="radio" name="method" className="hidden"
                 onChange={onChange} value="DELETE" />
              <span className="mr-2 py-1 px-4 rounded-full border-[1px] border-purple-600 text-sm font-bold tracking-widest text-purple-600 hover:bg-purple-100">DELETE</span>
            </label>

            <button></button>

            { method.includes('P') ? <textarea name="textArea" placeholder={method} className="border-2 border-gray-400 border-opacity-50 w-full mt-4 p-4"></textarea> : <></> }
            

          </form>

          <div 
            className="border-2 border-gray-400 border-opacity-50 rounded-md w-full p-4 mt-4">
              <ReactJson src={responseBody} theme="summerfruit:inverted"/>
            </div>
            
        </section>
      </div>
  )
}

export default Form;