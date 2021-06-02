const newCommentHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector("#newComment-text").value.trim();
  const postId = event.target.getAttribute("post-id");
  console.log(`the post id is ${postId}`);
  if (comment) {
    const response = await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Failed to post comment");
    }
  }
};
document
  .querySelector(".newComment-form")
  .addEventListener("click", newCommentHandler);
