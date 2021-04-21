const blogBtn = document.querySelectorAll('.blog-form');
const deleteBtn = document.querySelectorAll('.delete-btn')

const postBlog = async (event) => {
    event.preventDefault();
    const blogTitle = document.querySelector('#blog-title').value 
    const blogBody = document.querySelector('#blog-body').value
    const private = document.querySelector('#private').checked
    if (blogTitle && blogBody) {
        
        const response = await fetch('api/blogpost/newBlog', {
            method: 'POST',
            body: JSON.stringify({ blogTitle , blogBody , private, }),
            headers: { 'Content-Type': 'application/json'},
        })
        if(response.status == 200){
            Toastify({
                text: "Blog Posted!",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                className: "Success Toast",
                gravity: "bottom",
                position: "center"
              }).showToast()
        }else{
            console.log(err)
            //insert blog error toast here later 
        }
    }
}
const deletePost = async (event) => {
    event.preventDefault();
    console.log("deletePost hitting")
    const id = event.target.getAttribute("post-id");
    console.log(id)
   
    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        Toastify({
            text: "Blog Deleted!",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "Success Toast",
            gravity: "bottom",
            position: "center"
          }).showToast().then(window.location.href = '/profile')
        
      } else {
        console.log("++++++++++++++++++")  
        console.log('Failed to delete');
        console.log("++++++++++++++++++")  
      }
}






// if(blogBtn){blogBtn.addEventListener('submit',postBlog)};

if(blogBtn){blogBtn.forEach(btn => {btn.addEventListener('submit',postBlog)
})}

if(deleteBtn){deleteBtn.forEach(btn => {btn.addEventListener('click',deletePost)
})}