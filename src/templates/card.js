module.exports = function cardHTML (id, imagePath, title, ratings) {
  return `<div class="col-xs-6 col-md-3"><a href="${'/index.html?movie='+id}" class="movieitem">
            <div class="poster_wrap" style="background-image:url('${imagePath}')">
                <img class="poster" src="public/images/dummy.jpg" />
                <div class="movie-title">
                    <p class="title">${title}</p>
                    <p>${ratings}</p>
                </div>
            </div>
            </a></div>`;
};



