let artists = [
                {
                    path: "../res/artists-profile/ariana_grande.jpg",
                    albums: [
                                {
                                    path: "../res/album-cover/sweetener_ariana_grande.jpg",
                                    name: "sweetener"
                                },
                                {
                                    path: "../res/album-cover/thank_u_next_ariana_grande.jpg",
                                    name: "thank u next"
                                }
                            ]
                },
                {
                    path: "../res/artists-profile/dua_lipa.jpg",
                    albums: [
                                {
                                    path: "../res/album-cover/dua_lipa_complete_edition_dua_lipa.jpg",
                                    name: "dua lipa complete edition"
                                },
                                {
                                    path: "../res/album-cover/future_nostalgia_dua_lipa.jpg",
                                    name: "future nostalgia"
                                }
                            ]
                },
                {
                    path: "../res/artists-profile/taylor_swift.jpg",
                    albums: [
                                {
                                    path: "../res/album-cover/lover_taylor_swift.jpg",
                                    name: "lover"
                                },
                                {
                                    path: "../res/album-cover/reputation_taylor_swift.jpg",
                                    name: "reputation"
                                }
                            ]
                },
                {
                    path: "../res/artists-profile/post_malone.jpg",
                    albums: [
                                {
                                    path: "../res/album-cover/hollywoods_bleeding_post_malone.jpg",
                                    name: "hollywoods bleeding"
                                }
                            ]
                },
                {
                    path: "../res/artists-profile/the_weeknd.jpg",
                    albums: [
                                {
                                    path: "../res/album-cover/after_hours_deluxe_the_weeknd.jpg",
                                    name: "after hours deluxe"
                                },
                                {
                                    path: "../res/album-cover/after_hours_remixes_the_weeknd.jpg",
                                    name: "after hours remixes"
                                },
                                {
                                    path: "../res/album-cover/my_dear_melancholy_the_weeknd.jpg",
                                    name: "my dear melancholy"
                                }
                            ]
                },
                {
                    path: "../res/artists-profile/travis_scott.jpg",
                    albums: [
                                {
                                    path: "../res/album-cover/astroworld_travis_scott.jpg",
                                    name: "astroworld"
                                }
                            ]
                }
              ]

let artist_container = document.getElementById('artists-container');

artists.forEach(item => {
    let name = item.path.split('/')[3];
    name = name.substring(0, name.length-4).replace('_', ' ');
    let all_albums = ``
    item.albums.forEach(album => {
        let album_html =   `<div class="album">
                                <img src="${album.path}">
                                <div class="album-name">
                                    ${album.name}
                                </div>
                            </div>`
        all_albums += album_html;
    })

    let html = `<div class="artists-item">
                    <div class="main-item" onclick="showAlbums(this.lastElementChild)">
                        <div class="artist-img">
                            <img src="${item.path}">
                        </div>
                        <div class="artist-name">
                            ${name}
                        </div>
                        <div class="right-arrow">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </div>
                    <div class="artist-albums">
                        ${all_albums}
                    </div>
                </div>`
    artist_container.innerHTML += html;
})

artist_container.lastElementChild.lastElementChild.classList.add('last-artist-item');
artist_container.lastElementChild.previousElementSibling.lastElementChild.classList.add('last-artist-item');
let open = [];

showAlbums = (b) => {
    let albums = b.parentElement.nextElementSibling;
    if(albums.style.display === 'none' || albums.style.display === ''){
        albums.style.display = 'grid';
        b.parentElement.style.borderBottomLeftRadius = 0;
        b.parentElement.style.borderBottomRightRadius = 0;
        b.style.transform = 'rotate(-90deg)';
        // albums.onmouseout = (e) => {
        //     if(!albums.contains(e.relatedTarget))
        //         showAlbums(b);
        // }
        
        if(open.length > 0){
            showAlbums(open[0]);
            open.splice(0, 1);
        }

        open.push(b);
    }else{
        b.parentElement.style.borderBottomLeftRadius = '6px';
        b.parentElement.style.borderBottomRightRadius = '6px';
        b.style.transform = 'rotate(0deg)'
        albums.style.display = 'none';
        open.splice(open.indexOf(b), 1);
    }
}

let artist_items = artist_container.children;
let footer = document.getElementsByTagName('footer')[0];
search = (e) => {
    let val = e.path[0].value;
    for(let item of artist_items){
        if(!item.firstElementChild.children[1].innerHTML.includes(val.toLowerCase().trim())){
            item.style.display = 'none';
        }else{
            item.style.display = 'block';
        }
    }
    if(footer.getBoundingClientRect().bottom < screen.height){
        footer.style.position = 'fixed';
        footer.style.width = '100vw';
        document.getElementById('canary').style.marginRight ='60px';
    }
    if(val === '' || (artist_container.getBoundingClientRect().bottom > footer.getBoundingClientRect().top)){
        footer.style.position = 'initial';
        footer.style.width = '';
        document.getElementById('canary').style.marginRight ='0';
    }
    
}

document.getElementById('search-input').addEventListener('input', search);