import React from 'react'
import { Link } from 'react-router-dom'
import './comments/CommentpageStyle.css'

const CommentPage = ({ commoncoments }) => {
    console.log(commoncoments)
    return (
        <div className="container">
            {
                commoncoments?.slice(0, 18).map(com => (
                    <div key={com.id} className="">
                        <Link to={`/comment/${com.id}`} state={com}>
                            <div className='box'>
                                <div className='logo'><div className="picture"></div></div>
                                <h1 className='name'>{com.name}</h1>
                                <h1 className='email'>{com.email}</h1>
                                <div className='commentContainer'>
                                    <span className='commentText'>{com.body}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentPage
