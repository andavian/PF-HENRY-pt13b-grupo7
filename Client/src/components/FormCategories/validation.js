export default function validateForm(categoryData) {
  const errors = {};

  // Validación de nombre
  if (!categoryData.name) {
    errors.name = "Name is required.";
  } else if (!/^[A-Z]+$/i.test(categoryData.name)) {
    errors.name = "The name cannot contain numbers.";
  } else if (categoryData.name.length > 20) {
    errors.name = "The name cannot be longer than 20 characters.";
  }

  // Validación de imagen
  if (!categoryData.image) {
    errors.thumbnail = "thumbnail is required.";
  } else if (
    !/^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+([/?].*)?\.(jpg|jpeg|png|gif|svg)$/i.test(
      categoryData.thumbnail
    )
  ) {
    errors.thumbnail =
      "The image URL must be correct and with a valid extension.";
  }

  return errors;
}
