import React from "react";

export default function Carousel({images}) {
  const carouselStyle = {
    width: "100%",
    maxWidth: "100vw", // Ocupar todo el ancho de la ventana
    margin: 0,
    overflow: "hidden",
  };

  const controlButtonStyle = {
    color: "black",
    fontSize: "30px",
    backgroundColor: "transparent",
    border: "none",
    fontWeight: "bold",
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={carouselStyle}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {images && images.length > 0 ?
           (<img
           src={images}
           className="d-block w-100"
           alt="Slide 1"
           style={{ maxHeight: "550px", objectFit: "cover" }}
         />):(
           <img
             src="https://s3-alpha-sig.figma.com/img/9b48/f3d5/14b8093fd0caadd472d1923b623251d4?Expires=1696809600&Signature=IN1xidvVRCR7qHEnhqcbp9-4KEhIkvhX~ID21CyPC0oKaG9hFQ3BJTB9yzJsYe4OwcZl~T4vEAKgtqJDg2e~oBLKt8WZRPA15K5rP1llsxqPOFQyma9uR9vpFDhQO2bP4KB-geXKC799Pfb9ZXDCBBDxN6u3WEL5jtVLsaM2BBjWAq6vBeaiGE7FbRhXany1EoIGCQcKbqmjJQQk8-2cKwxpaIGtSVlJ7Z8GEXw53Mzln84DOrMYWMmAQg6X0zXwNOuG-wNQcT2sPIl-W4V14kJMVw4jyJPZ75k4VQ5ulZFyaAyWlzvGpjt995Y-L8voX2b1BTKwNvWlIYtYCttsEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
             className="d-block w-100"
             alt="Slide 1"
             style={{ maxHeight: "1000px", objectFit: "cover" }}
           />
         )}
        </div>
        <div className="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/9b48/f3d5/14b8093fd0caadd472d1923b623251d4?Expires=1696809600&Signature=IN1xidvVRCR7qHEnhqcbp9-4KEhIkvhX~ID21CyPC0oKaG9hFQ3BJTB9yzJsYe4OwcZl~T4vEAKgtqJDg2e~oBLKt8WZRPA15K5rP1llsxqPOFQyma9uR9vpFDhQO2bP4KB-geXKC799Pfb9ZXDCBBDxN6u3WEL5jtVLsaM2BBjWAq6vBeaiGE7FbRhXany1EoIGCQcKbqmjJQQk8-2cKwxpaIGtSVlJ7Z8GEXw53Mzln84DOrMYWMmAQg6X0zXwNOuG-wNQcT2sPIl-W4V14kJMVw4jyJPZ75k4VQ5ulZFyaAyWlzvGpjt995Y-L8voX2b1BTKwNvWlIYtYCttsEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="d-block w-100"
            alt="Slide 2"
            style={{ maxHeight: "1000px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/9b48/f3d5/14b8093fd0caadd472d1923b623251d4?Expires=1696809600&Signature=IN1xidvVRCR7qHEnhqcbp9-4KEhIkvhX~ID21CyPC0oKaG9hFQ3BJTB9yzJsYe4OwcZl~T4vEAKgtqJDg2e~oBLKt8WZRPA15K5rP1llsxqPOFQyma9uR9vpFDhQO2bP4KB-geXKC799Pfb9ZXDCBBDxN6u3WEL5jtVLsaM2BBjWAq6vBeaiGE7FbRhXany1EoIGCQcKbqmjJQQk8-2cKwxpaIGtSVlJ7Z8GEXw53Mzln84DOrMYWMmAQg6X0zXwNOuG-wNQcT2sPIl-W4V14kJMVw4jyJPZ75k4VQ5ulZFyaAyWlzvGpjt995Y-L8voX2b1BTKwNvWlIYtYCttsEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="d-block w-100"
            alt="Slide 3"
            style={{ maxHeight: "1000px", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        style={controlButtonStyle}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        style={controlButtonStyle}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
