const images = require.context('./assets/images-work', true);
const imagesArchive = require.context('./assets/archive', true);

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


export const getAllArchiveImages = () => {
  // Get all matching files in the context
  const allFiles = imagesArchive.keys();

  // Map over the files and load each one
  return allFiles.map((fileName) => imagesArchive(fileName));
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
};

export const getRandomPosition = () => {
  // Get the width and height of the viewport
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Generate random x and y coordinates within the viewport bounds
  const x = Math.random() * (width - 50) + 50;
  const y = Math.random() * (height - 200) + 200;

  return { x, y };
};