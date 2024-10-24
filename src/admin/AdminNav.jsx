import React from 'react'
import { Container, Row } from 'reactstrap'

import useAuth from '../custom-hooks/useAuth'
import '../styles/admin-nav.css'

const AdminNav = () => {
    const { currentUser } = useAuth()

    return (
        <header className='admin__header'>
            <div className="admin__nav-top">
                <Container>
                    <Row>
                        <div className="admin__nav-wrapper-top">
                            <div className="logo">
                                <h2>Multimart</h2>
                            </div>

                            <div className="search__box">
                                <input type="text" placeholder='Search......' />
                                <span><i className="ri-search-line"></i></span>
                            </div>

                            <div className="admin__nav-top-right">
                                <span><i className="ri-notification-3-line"></i></span>
                                <span><i className="ri-settings-2-line"></i></span>
                                {currentUser ? (
                                    <img src={currentUser.photoURL} alt="Profile" />
                                ) : (
                                    <span>No User</span> // Hiển thị một thông báo hoặc ảnh đại diện mặc định khi không có người dùng
                                )}
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default AdminNav
