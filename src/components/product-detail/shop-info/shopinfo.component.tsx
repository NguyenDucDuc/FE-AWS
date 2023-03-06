import { EyeOutlined, SendOutlined } from "@ant-design/icons"
import { Button, Col, Row } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./shopinfo.style.scss"

interface IProps {
    showChat: boolean
}

const ShopInfo = () => {
    const nav = useNavigate()
    const handleOnChangeRate = (values: number) => {
        console.log(values)
    }
    const handleChangeShowChatBox = () => {
        
    }
    const handleChangeHideChatBox = () => {
        
    }
    return (
            <div className="shop-info">
                <Row className="mgl-25">
                    <Col span={8}>
                        <Row>
                            <Col span={7}>
                                <div className="avt-shop">
                                    <img src="https://res.cloudinary.com/djbju13al/image/upload/v1676826995/Avatar/1676826993120.jpg" />
                                </div>
                            </Col>
                            <Col span={17} >
                                <p style={{ marginTop: '25px', fontWeight: 'bold' }}>Hades Studio</p>
                                <Row className="mgt-20">
                                    <Col span={12}>
                                        <Button className="btn-color" type="primary" icon={<SendOutlined />} onClick={handleChangeShowChatBox}>Nhắn tin</Button>
                                    </Col>
                                    <Col span={12}>
                                        <Button className="btn-color" type="primary" icon={<EyeOutlined />} onClick={() => nav("/shop-profile")}>Xem shop</Button>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <Row className="shop-info-stats">
                            <Col span={8}>
                                <h4>Đánh giá: <span style={{color: 'red'}}>40.5K</span></h4>
                            </Col>
                            <Col span={8}>
                                <h4>Tỷ lệ phản hồi: <span style={{color: 'red'}}>40.5K</span></h4>
                            </Col>
                            <Col span={8}>
                                <h4>Ngày tham gia: <span style={{color: 'red'}}>40.5K</span></h4>
                            </Col>
                            <Col span={8}>
                                <h4>Số sản phẩm: <span style={{color: 'red'}}>40.5K</span></h4>
                            </Col>
                            <Col span={8}>
                                <h4>Số lượt thích:<span style={{color: 'red'}}>40.5K</span> </h4>
                            </Col>
                            <Col span={8}>
                                <h4>Người theo dõi: <span style={{color: 'red'}}>40.5K</span></h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
    )
}


export default ShopInfo