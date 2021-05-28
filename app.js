const particles = document.getElementById('particles-js')
particles.addEventListener('click', function(){
    particles.classList.add('active')
    setTimeout(function(){ particles.classList.remove('active') }, 800)
});
