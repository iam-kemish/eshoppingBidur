// eslint-disable-next-line no-unused-vars

import { useLocation } from "react-router-dom"

const Description = () => {
  const location = useLocation();
  const{title, desc, image, category,Price } = location.state||{};
  console.log(desc)
  return (
    <div className="container my-3">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card mb-4 shadow p-3 mb-5 bg-white rounded border-top border-5 rounded shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="Item Image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-normal">{title}</h5>
                            <p className="card-text">{desc}</p>
                            
                            <p className="card-text">{category}</p>
                            <p className="card-text">{Price}</p>
                            <a href="https://www.facebook.com/bidur.dhamala.10" className="btn btn-primary">Message to order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Description
