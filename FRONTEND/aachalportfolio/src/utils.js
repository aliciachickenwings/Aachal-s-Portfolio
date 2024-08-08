const images = require.context('./assets/images-work', true);

export const getMainImage = (imageName) => {
  try {
    return images(`./${imageName}/main.png`);
  } catch (err) {
    console.error(`Image not found: ${imageName}`);
    return null;
  }
};

export const getFolderImages = (folderName) => {
  const folderImages = [];
  
  images.keys().forEach((key) => {
    const match = key.match(/\.\/([^/]+)\/(.+)/);
    if (match && match[1] === folderName) {
      folderImages.push(images(key));
    }
  });

  return folderImages;
};

export const fetchTags = async (tagIds) => {
  const tagPromises = tagIds.map(async (tagId) => {
    try {
      const response = await fetch(`http://localhost:3001/tag/${tagId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return null;
    }
  });
}