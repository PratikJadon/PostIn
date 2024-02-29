export default async function uploadToImgBB(imagePath) {
  try {
    // Read the image file
    const imageData = fs.readFileSync(imagePath).toString("base64");

    // Send a POST request to ImgBB API
    const response = await axios.post("https://api.imgbb.com/1/upload", {
      key: process.env.IMG_API, // Replace 'your_api_key' with your ImgBB API key
      image: imageData,
    });

    // Extract the image URL from the response
    const imageUrl = response.data.data.url;

    console.log("Image uploaded successfully. URL:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error.message);
    return null;
  }
}
