let scroller = document.getElementsByClassName('scroller')[0];

let c = 1;
while(c < 4){
    let div = document.createElement('DIV');
    div.classList.add('item');
    try{
        let img = new Image()
        img.src = `./res/banner/banner-${c}.webp`;
        
        scroller.append(img);
    }catch(err){
        console.log(err)
    }
    c++;
}

setInterval(() => {
    let img = scroller.firstElementChild;
    img.classList.add("animate");
    img.addEventListener("animationend", () => {
        img.classList.remove("animate");
        scroller.append(img);
    })
}, 4000);

let artist_img = document.getElementById('artist-img');
let artist_name = document.getElementById('artist-name');

let artists = [
                "./res/home-artist/dua_lipa.webp",
                "./res/home-artist/post_malone.webp",
                "./res/home-artist/taylor_swift.webp",
                "./res/home-artist/the_weeknd.webp",
                "./res/home-artist/travis_scott.webp"
              ]
let curr = 1;
let z = 0;
let details = [];
let ariana_img = new Image();
ariana_img.src = "./res/home-artist/ariana_grande.webp";
ariana_img.classList.add('fadeIn')
let ariana = {name: 'Ariana Grande', img: ariana_img}
details.push(ariana);
artist_img.append(ariana_img);

artists.forEach(el => {
    let name = el.split('/')[3];
    name = name.substring(0, name.length-5).replace('_', ' ');
    let img = new Image();
    img.src = el;
    img.alt = name;
    details.push({
        name, img
    });
    artist_img.append(img);
})

setInterval(() => {
    details[curr].img.classList.remove('fadeOut');
    details[curr].img.classList.add('fadeIn');
    let t;
    if(curr === 0)t = details.length - 1
    else t = curr - 1;
    setTimeout(() => {
        details[t].img.classList.remove('fadeIn');
        details[t].img.classList.add('fadeOut');
    }, 500)
    if(curr === details.length - 1)curr = 0;
    else curr++;
}, 5000);