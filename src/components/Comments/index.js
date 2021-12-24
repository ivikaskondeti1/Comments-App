import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    inititalArray: [],
    name: '',
    comment: '',
  }

  changeStateName = event => {
    this.setState({name: event.target.value})
  }

  changeStateComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment, inititalArray} = this.state
    const newObj = {
      id: uuidv4(),
      name,
      comment,
      commentLike: false,
    }
    const newarrat = [...inititalArray, newObj]
    console.log(newarrat)
    this.setState(prevState => ({
      inititalArray: [...prevState.inititalArray, newObj],
      name: '',
      comment: '',
    }))
  }

  onclicklike = id => {
    console.log(id)
    this.setState(prevstate => ({
      inititalArray: prevstate.inititalArray.map(eachitem => {
        if (eachitem.id === id) {
          return {...eachitem, commentLike: !eachitem.commentLike}
        }
        return eachitem
      }),
    }))
  }

  onDelete = id => {
    console.log(id)
    this.setState(prevState => ({
      inititalArray: prevState.inititalArray.filter(
        eachitem => eachitem.id !== id,
      ),
    }))
  }

  render() {
    const {inititalArray, name, comment} = this.state
    return (
      <div className="mainPage">
        <h1 className="Heading">Comments</h1>
        <div className="commntsBlock">
          <div>
            <p className="commentPara">Say something about 4.0 Technologies</p>
            <form className="formBox" onSubmit={this.addComment}>
              <input
                value={name}
                type="text"
                placeholder="Your Name"
                onChange={this.changeStateName}
              />
              <textarea
                value={comment}
                type="textarea"
                placeholder="Your Comment"
                onChange={this.changeStateComment}
              />
              <button className="btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="commentsImage"
          />
        </div>
        <div>
          <hr className="line" />
        </div>
        <div className="CommnetCount">
          <p className="count">{inititalArray.length}</p>
          <p>Comments</p>
        </div>
        <ul className="listItems">
          {inititalArray.map(eachListItem => (
            <CommentItem
              eachListItem={eachListItem}
              key={eachListItem.id}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              onclicklike={this.onclicklike}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
