export default function validateForm(productData) {
  const errors = {};

  // validación de Categoría
  if (!productData.categoryName) {
    errors.categoryName = "La categoría es requerida.";
  }
  // Validación de Titulo
  if (!productData.title) {
    errors.title = "El título es requerido.";
  } else if (!/^[A-Z]+$/i.test(productData.title)) {
    errors.title = "El título no puede contener números";
  } else if (productData.title.length > 50) {
    errors.title = "El título no puede tener más de 50 caracteres";
  }

  // Validación de imagen
  if (!productData.primaryimage) {
    errors.primaryimage = "La imagen es requerida.";
  } else if (
    !/^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+([/?].*)?\.(jpg|jpeg|png|gif|svg)$/i.test(
      productData.primaryimage
    )
  ) {
    errors.primaryimage =
      "La url de la imagen debe ser una URL válida y dene tener la extension correcta";
  }

  //Validación de precio
  if (!productData.price) {
    errors.price = "El precio es requerido.";
  } else if (!/^[0-9]+$/.test(productData.price)) {
    errors.price = "El precio debe ser un número.";
  }

  // Validación de Descripción
  if (!productData.description) {
    errors.description = "La descripción es requerida.";
  } else if (productData.description.length > 300) {
    errors.description = "La descripción no puede tener más de 300 caracteres";
  }

  return errors;
}
