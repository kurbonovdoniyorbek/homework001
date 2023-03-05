import React from 'react'
import { useLocation } from 'react-router-dom'
import '../userscomment/UsersPage.css'

const UsersPage = () => {
    const com = useLocation()?.state

    return (
        <div className='mainpage'>
            <div className="comBox">
                <h1 className="text">{com.name}</h1>
                <h1 className='comment'>{com.body}</h1>
            </div>
        </div>
    )
}

export default UsersPage
