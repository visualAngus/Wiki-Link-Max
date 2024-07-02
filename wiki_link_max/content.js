chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "copyImageUrl") {
      const imageUrl = getImageUrl(); // Helper function to get image URL
      if (imageUrl) {
        copyTextToClipboard(imageUrl);
      } else {
        console.error("Failed to retrieve image URL.");
      }
    }
  });
  
  function getImageUrl() {
    // Implement logic to get the image URL based on your specific needs (e.g., targeting specific classes or attributes).
    // You might need to use document.querySelector() or other DOM manipulation techniques.
    // Return the image URL as a string if successful, or null if no image found.
  }
  
  function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }