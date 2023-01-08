const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    if (this.responseText == "error") {
        document.querySelector(".spotify").style.display = "none";
        document.querySelector(".lop").style.display = "none";
        return;
    }
    const myObj = JSON.parse(this.responseText);

    document.querySelector(".spotifyImg").src = myObj.item.album.images[0].url;
    document.querySelector(".spotifyName").innerHTML = myObj.item.name;
    artists = myObj.item.artists;
    for (let i = 0; i < artists.length; i++) {
        document.querySelector(".spotifyArtists").innerHTML += artists[i].name + " ";
    }
    document.querySelector(".spotify").href = myObj.item.external_urls.spotify;
}
xmlhttp.open("GET", "https://petchx.com/spotify/track.php");
xmlhttp.send();