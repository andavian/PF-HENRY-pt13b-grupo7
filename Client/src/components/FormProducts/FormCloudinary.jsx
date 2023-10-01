//Formulario de prueba para subir las imagenes a Cloudinary
import React, { useState } from "react";
import axios from "axios";

const FormCloudinary = (props) => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/doxdyrg8w/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        setImage(file.secure_url);
        console.log(file.secure_url);
        setLoading(false);
    }
   

    return (
        <div>
            <form>
                <input 
                    type="file" 
                    name="file" 
                    onChange={uploadImage} />
                    {loading ? (<h3>Cargando Imagen...</h3>) : (<img src={image} style={{width: "300px"}}/>)}
            </form>
        </div>
    )
}
export default FormCloudinary;