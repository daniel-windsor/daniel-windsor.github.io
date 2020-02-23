const buttons = document.querySelectorAll('.change-page')
console.log(buttons)

buttons.forEach(button => button.addEventListener('click', changePage))

function changePage(e) {

  const blog = document.querySelector('.blog')
  const project = document.querySelector('.project')
  console.log(blog)

  blog.classList.toggle('changed')
  project.classList.toggle('changed')
}