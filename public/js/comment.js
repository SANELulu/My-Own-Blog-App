const commentBtn = document.querySelector('#comment-btn');

const commentFunction = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#comment-text').value.trim();
    console.log(comment)
    const id = event.target.getAttribute('post-id');
    console.log(id)

    if (comment) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/comment/', {
          method: 'POST',
          body: JSON.stringify({ comment, id }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            Toastify({
                text: "Comment Posted",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                className: "Success Toast",
                gravity: "bottom",
                position: "center"
              }).showToast();
            
          } else {
            console.log("failed to post comment")
          }
  
    }
}

if(commentBtn){commentBtn.addEventListener('click',commentFunction)};