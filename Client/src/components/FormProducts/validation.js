export default function validateForm(productData) {
  const errors = {};

  // Validación de Titulo
  if (!productData.description) {
    errors.title = "description is required.";
  } else if (!/^[A-Z]+$/i.test(productData.description)) {
    errors.title = "The description cannot contain numbers.";
  } else if (productData.title.length > 30) {
    errors.title = "The description cannot be longer than 30 characters.";
  }

  // Validación de imagen
  if (!productData.image) {
    errors.image = "image is required.";
  } else if (
    !/^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+([/?].*)?\.(jpg|jpeg|png|gif|svg)$/i.test(
      productData.image
    )
  ) {
    errors.image = "The image URL must be correct and with a valid extension.";
  }

  // Validación de Descripción
  if (!productData.description) {
    errors.description = "description is required.";
  } else if (productData.description.length > 300) {
    errors.description =
      "The description cannot be longer than 300 characters.";
  }

  return errors;
}
