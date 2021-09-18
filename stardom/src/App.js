import './App.css'
import prostar from './resources/prostars.json'
import React, { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      actors: prostar,
      list: prostar.filter((i, index) => index < 5), // prostar is json file
    }
  }
  getRandomStar = () => {
    console.log('Change star clicked')
    this.state.list.pop()
    let r = Math.round(Math.random() * this.state.actors.length)
    this.state.list.push(this.state.actors[r])
    console.log(this.state.list)

    this.setState = {
      list: this.state.list,
    }
  }

  sortStar = () => {
    console.log('Sort by Name')
    this.setState = {
      list: this.state.list.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
      ),
    }
    console.log(this.state.list)
  }
  sortByPopularity = () => {
    console.log('Sort by Popularity')
    this.setState = {
      list: this.state.list.sort((a, b) =>
        a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0,
      ),
    }
    console.log(this.state.list)
  }

  delete = (e) => {
    let x = e.target.value
    console.log(x)
  }
  show() {
    // const list = this.state.list.map((item) => {
    return this.state.list.map((item) => {
      return (
        <div>
          <div className="App">
            <div id="tablediv">
              <table className="table">
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>
                    <img src={item.pictureUrl} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                  <td>
                    <button id="delete" onClick={this.delete}>
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )
    })
    // return list
  }
  render() {
    return (
      <div>
        <button id="add" onClick={this.getRandomStar}>
          Add Random Prostars
        </button>
        <button id="sort" onClick={this.sortStar}>
          Sort by Name
        </button>
        <button id="sort" onClick={this.sortByPopularity}>
          Sort by Popularity
        </button>
        <div>{this.show()}</div>
      </div>
    )
  }
}
export default App