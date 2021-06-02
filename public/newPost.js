const newPostHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-input").value.trim();
  const description = document.querySelector("#description-input").value.trim();
  const postId = event.target.getAttribute("post-id");
  console.log(`the ${title} and ${description}`);
  if (title && description) {
    const response = await fetch("/api/post/", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to post");
    }
  }
};
document
  .querySelector(".newpost-form")
  .addEventListener("click", newPostHandler);
