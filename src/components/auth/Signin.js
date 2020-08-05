import React, { Component } from "react";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <section className="text-gray-700 body-fon py-10">
          <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
            <span>Signin</span>{" "}
          </h1>
          <div className="container max-w-2xl py-0 ">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={this.handleSubmit}
            >
              <div className="mb-6">
                <label className="block text-gray-700 text-xl font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={this.handleChange}
                  id="email"
                  type="text"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-xl font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={this.handleChange}
                  id="password"
                  type="password"
                  placeholder="*********"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Signin;
