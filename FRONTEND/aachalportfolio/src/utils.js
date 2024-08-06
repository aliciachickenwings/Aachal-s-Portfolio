const images = require.context('./assets/images-work', true);

export const getMainImage = (imageName) => {
  try {
    return images(`./${imageName}/main.png`);
  } catch (err) {
    console.error(`Image not found: ${imageName}`);
    return null;
  }
};