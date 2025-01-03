async function likeCode() {
    return new Promise((likePost)=>{
        likePost("Liked the post successfully.")
    })
}

async function commentCode() {
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted Successfully in the post")
    })
}

async function createPost(){
    var post = new Promise((cPost) => {
        cPost("Post Created Successfully")        
    })
    var [posts,comment,like] = await Promise.all([post,commentCode(),likeCode()])
    console.log(posts)
    console.log(comment)
    console.log(like)
}
createPost()


//task


async function likeCode(flagl) {
    return new Promise((likedPost, unlikedPost) => {
        if (flagl === 0) {
            likedPost("Liked the Post Successfully");
        } else {
            unlikedPost("Unliked the Post Successfully");
        }
    });
}

async function commentCode(flagc) {
    return new Promise((addComment, deleteComment) => {
        if (flagc === 0) {
            addComment("Comment added Successfully");
        } else {
            deleteComment("Comment deleted Successfully");
        }
    });
}

async function shareCode(flags) {
    return new Promise((sharedPost, unsharePost) => {
        if (flags === 0) {
            sharedPost("Shared the Post successfully");
        } else {
            unsharePost("Unshared the Post Successfully");
        }
    });
}

async function createPost(flagp, flagc, flagl, flags) {
    const post = new Promise((cPost, deletePost) => {
        if (flagp === 0) {
            cPost("Post Created Successfully");
        } else {
            deletePost("Post Deleted Successfully");
        }
    });
    
    const results = await Promise.allSettled([post,commentCode(flagc),likeCode(flagl),shareCode(flags)]);
    
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(result.value);
        } else {
            console.error(result.reason);
        }
    });
}
createPost(0, 0, 0, 0);
    