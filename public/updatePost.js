const updatePost = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-input").value.trim();
  const description = document.querySelector("#description-input").value.trim();
  const postId = event.target.getAttribute("post-id");
  console.log(`the ${title} and ${description}`);
  console.log(`the ${postId}`);
  if (title && description) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to update the post");
    }
  }
};
document
  .querySelector(".btn-form-update")
  .addEventListener("click", updatePost);
