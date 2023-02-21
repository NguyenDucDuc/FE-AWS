import { AppstoreOutlined, BellOutlined, DownOutlined, MailOutlined, NotificationFilled, NotificationOutlined, SettingOutlined, ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, MenuProps, Row, Space, Typography } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { RootState } from "../../store/store";
import "./header.style.scss"



const Header = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const items: MenuProps['items'] = [
        {
            label: (<Link to="/home">Trang chủ</Link>),
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: (<Link to="/login">Đăng nhập</Link>),
            key: 'login',
            icon: <AppstoreOutlined />
        },
        {
            label: (<Link to="/admin/home">Quản trị</Link>),
            key: 'admin',
            icon: <SettingOutlined />
        },
        {
            label: `${user.firstName} ${user.lastName === undefined ? "" : user.lastName}`,
            key: 'username',
            icon: <UserOutlined />,
            children: [
                {
                    label: "Đăng xuất",
                    key: 'logout',
                    onClick: () => {
                        localStorage.removeItem("accessToken")
                    }
                },
                {
                    label: "Đổi mật khẩu",
                    key: 'changePassword'
                }
            ]
        },
        {
            label: (<Link to="/register">Đăng ký</Link>),
            key: "register",
        },
        {
            label: (<Link to="/shop-create">Tạo shop</Link>),
            key: "shopCreate",
        }
    ];
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const onSearch = (value:string) => {
        console.log(value)
    }


    return (
        <div>
            <div className="header">
                <Row>
                    <Col span={10}>
                        <h1>Ecommerce</h1>
                    </Col>
                    <Col span={14}>
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                    </Col>
                </Row>
                <Row style={{marginTop: '20px', marginLeft: '25px'}}>
                    <Col span={10}>
                    </Col>
                    <Col span={8}>
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                            
                        />
                    </Col>
                    <Col span={6}>
                        <Row>
                            <Col span={4}>
                            </Col>
                            <Col span={6}>
                                <ShoppingCartOutlined style={{fontSize: '25px'}} />
                            </Col>
                            <Col span={6}>
                                <BellOutlined style={{fontSize: '25px'}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Header