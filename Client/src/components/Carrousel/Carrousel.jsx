import React from "react";

export default function Carousel({images}) {
  const carouselStyle = {
    width: "100%",
    maxWidth: "100%", // Ocupar todo el ancho de la ventana
    margin: 0,
    overflow: "hidden",
    position: "relative",
  };

  const controlButtonStyle = {
    color: "black",
    fontSize: "20px",
    backgroundColor: "transparent",
    border: "none",
    fontWeight: "bold",
  };

  const dotContainerStyle = {
    position: "absolute",
    bottom: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const dotButtonStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "yellow",
    border: "none",
    margin: "0 5px",
    cursor: "pointer",
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={carouselStyle}
    >
      <div className="carousel-indicators" style={dotContainerStyle}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            style={dotButtonStyle}
          ></button>
        ))}
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
        {[1, 2, 3].map((index) => (
          <div key={index} className={`carousel-item ${index === 1 ? "active" : ""}`}>
            <img
              src={`https://s3-alpha-sig.figma.com/img/9b48/f3d5/14b8093fd0caadd472d1923b623251d4?Expires=1696809600&Signature=IN1xidvVRCR7qHEnhqcbp9-4KEhIkvhX~ID21CyPC0oKaG9hFQ3BJTB9yzJsYe4OwcZl~T4vEAKgtqJDg2e~oBLKt8WZRPA15K5rP1llsxqPOFQyma9uR9vpFDhQO2bP4KB-geXKC799Pfb9ZXDCBBDxN6u3WEL5jtVLsaM2BBjWAq6vBeaiGE7FbRhXany1EoIGCQcKbqmjJQQk8-2cKwxpaIGtSVlJ7Z8GEXw53Mzln84DOrMYWMmAQg6X0zXwNOuG-wNQcT2sPIl-W4V14kJMVw4jyJPZ75k4VQ5ulZFyaAyWlzvGpjt995Y-L8voX2b1BTKwNvWlIYtYCttsEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
              className="d-block w-100"
              alt={`Slide ${index}`}
              style={{ maxHeight: "1000px", objectFit: "cover" }}
            />
          </div>
        ))}
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