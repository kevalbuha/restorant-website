import React from 'react'

function Card() {
  return (
    <div>
         <div className="mt-3 p-4 bg-dark text-light">
        <div
          className="card bg-dark text-light"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">this is important text</p>
            <div className="container w-100 text-light">
              <select className="m-2 h-100 bg-success text-light">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success text-light">
                <option>Half</option>
                <option>Full</option>
              </select>
              <div className="d-inline h-100 fs-5 text-light">
                Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card