const toggleBtn = document.getElementById('toggleBtn')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

toggleBtn.onclick = function(){
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
}