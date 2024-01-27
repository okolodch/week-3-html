let moviePoster = document.querySelector(".movie-poster-image");
//console.log(moviePoster;)
let modal = document.querySelector("#myModal");
//console.log(modal1);
let closeBtn = document.querySelector('.closeBtn');
console.log(closeBtn);
let modalImage = document.querySelector(".movie-poster-modal");



moviePoster.addEventListener('click', ()=> {
    
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;

}) ;

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';

} );

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }

})