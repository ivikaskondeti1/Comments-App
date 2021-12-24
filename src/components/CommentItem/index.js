import {formatDistanceToNow} from 'date-fns'
import './index.css'

let count = 0
const CommentItem = props => {
  const {
    eachListItem,
    initialContainerBackgroundClassNames,
    onclicklike,
    onDelete,
  } = props
  const {name, comment, commentLike, id} = eachListItem
  const likeButtonPress = () => {
    onclicklike(id)
  }
  const deleteButtonPress = () => {
    onDelete(id)
  }
  count += +1
  if (count > 6) {
    count = 0
  }
  // console.log(count)
  // console.log(eachListItem)
  const Initial = name[0]
  const commentimg = commentLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const commentimgName = commentLike ? 'liked' : 'like'
  return (
    <li className="CommentList">
      <div className="Namediv">
        <p className={`Initial ${initialContainerBackgroundClassNames[count]}`}>
          {Initial}
        </p>
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="Comment">{comment}</p>
      <div className="likesblock">
        <button
          className={commentimgName}
          type="submit"
          onClick={likeButtonPress}
        >
          <img className="likeImage" src={commentimg} alt="like" />
          like
        </button>
        <button
          testid="delete"
          type="submit"
          className={commentimgName}
          onClick={deleteButtonPress}
        >
          <img
            className="likeImage"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <div>
        <hr className="line" />
      </div>
    </li>
  )
}

export default CommentItem
