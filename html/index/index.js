const listViewComment = document.querySelector(".comments")
console.log(listViewComment, "view ")

const listComments = async () => {
    const res = await fetch("http://localhost:8080/api/comments/659e0ea212cd22f8ca01083a")

    return await res.json()
}

// const handleClick= ()=>{
    document.addEventListener("DOMContentLoaded",(e)=>{
        const itemEle = document.querySelector(".comment_id")
        console.log(itemEle,"item items")
    })
// }
const handleGetIdCmt= (id)=>{
    console.log(id,"id comment")
}

const showComment = async () => {
    
    const listComment = await listComments()
    console.log(listComment, "dfd")

    listViewComment.innerHTML = listComment && listComment.map(item => {
       

        return (` 
    <li class="item_comment ${item?.author?.username === "user2" ?"comment_me":""}">

        ${item.parentId?`<p>Tra loi : ${item.parentId?.author?.username}</p>`:""}

            <span style="margin-left: 10px; font-size: smaller;" onclick="handleGetIdCmt('${item._id}')" class="comment_id">${item?.author?.username}</span>
            <p>  ${item.text}</p>
         
    </li>
  `)
    }).join("")
}


showComment()
