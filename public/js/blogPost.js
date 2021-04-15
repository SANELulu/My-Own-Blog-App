const blogBtn = document.querySelector('.blog-form');

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
   
    


if(blogBtn){blogBtn.addEventListener('submit',postBlog)};