fetch(`${window.location.origin}/api/gallery`)
    .then(function (response) {
        // Json returned 
        return response.json();
    })
    .then(function (nature) {
        // data js object 
        console.log(nature);

        let output = '';

        whiskey.forEach(function (nature) {
            output += `<figure class="card">
                <img src="images/gallery/${nature.Path}.jpg" alt="greenland": ${nature.title}" width="${nature.width}" height="${nature.height}">
               </figure>`;
        });

        // container for images
        document.querySelector('.gallery').innerHTML = output;
    })

    .catch(function (error) {
        if (error) {
            console.log('ERROR');
        }
    });