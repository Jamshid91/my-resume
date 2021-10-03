const comments = document.querySelectorAll('.comments_group');
const commentsBox = document.querySelectorAll('.comments_group');

comments.forEach((comment) => {
  comment.addEventListener('mouseover', () => {
  comment.children[2].classList.add('reply_hide');
  comment.children[1].children[1].classList.add('comment_bgc')
  })
});

comments.forEach((comment) => {
  comment.addEventListener('mouseout', () => {
    comment.children[2].classList.remove('reply_hide');
    comment.children[1].children[1].classList.remove('comment_bgc')
  })
});


function auto_grow(element) {
  element.style.height = '5px';
  element.style.height = (element.scrollHeight) + 'px';

}

// comment.lastElementChild.classList.add('comment_bgc')
// comment.nextElementSibling.classList.add('reply_hide');

// commentBox.children[2].classList.remove('reply_hide');
// commentBox.children[1].children[1].classList.remove('comment_bgc')