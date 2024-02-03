console.log("JS Running...");
let post_btn = document.querySelector(".input-button")

post_btn.addEventListener('click', function(){
    console.log("Post button was clicked!");
    let input_textbox = document.querySelector(".input-textbox")
    let input_text = input_textbox.value;

    let posts_box = document.querySelector(".posts")
    let main_post = document.createElement('div');
    main_post.innerHTML = `<div class="main-post" style="padding-bottom: 3vh">
    <div class="post-main">
        <div class="prof-img">
            <img src="assets/profile_image.png" alt="#">
        </div>
        <div class="post-right">    
            <div class="post-det">
                <h4>Name @User</h4>
                <div class="post-right-btns">
                    <img src="assets/edit.png" alt="#">
                    <img src="assets/delete.png" alt="#">
                </div>
            </div>
            
            <div class="post-txt-area">
                <textarea name="post" id="post-area-text" cols="60" rows="10" disabled = "disabled">${input_text}</textarea>
            </div>
            
            <div class="like-cmnt-btns">
                <img src="assets/comment.png" alt="#">
                <img src="assets/heart.png" alt="#">
            </div>
        </div>
    </div>`

    posts_box.appendChild(main_post);

})
