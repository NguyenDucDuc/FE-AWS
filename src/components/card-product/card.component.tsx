import "./card.style.scss"



const CardProduct = () => {
    return (
        <div className="card-product">
            <img src="https://cf.shopee.vn/file/sg-11134201-22120-ut8eip1jfflvf8" />
            <h4>Áo thun nam cực chất nam cực chất </h4>
            <div className="price-order">
                <p style={{color: 'red', fontWeight: 'bold'}}>290.000 VND</p>
                <p>420 đã bán</p>
            </div>
        </div>
    )
}

export default CardProduct