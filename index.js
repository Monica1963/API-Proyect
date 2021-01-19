const URL = "https://the-beatles-api.herokuapp.com/api/v1/albums";

//imágenes de los albums
const image = [" ", "1 (2015 Version).jpg", 'AbbeyRoad.jpg', 'WhiteAlbum.jpg', "SgtPeppers.jpg", "RubberSoul.jpg", "BlueAlbum.jpg", 
"RedAlbum.jpg", 'Revolver.jpg', 'Love.jpg', 'LetItBe.jpg', 'Help.jpg', 'MagicalMysteryTour.jpg',
'AHardDaysNight.jpg', 'PleasePleaseMe.jpg', 'WhitTheBeatles.jpg', 'BeatlesForSale.jpg', 'LetItBeNaked.jpg',
'PastMasters.jpg', 'SgtPeppersDE.jpg', 'YellowSubmarine.jpg', 'YellowSubmarineSongtrack.jpg' ];

//Para armar array de info de cada album incluyendo lista de temas/letras
// const info = [
//   {
//     id: 1,
//     imagen: "1 (2015 Version).jpg",
//     music: "https://music.apple.com/us/album/1-2015-version/1440833098?l=es",
//     lyrycs: ""
//   }
//   {
//     id: 2,
//     imagen: "AbbeyRoad.jpg",
//     music: "https://music.apple.com/us/album/abbey-road-remastered/1441164426?l=es",
//     lyrycs: "lyrics\\AbbeyRoad"
//   }
// ]

//array de links de audios 
const music = [" ", "https://music.apple.com/us/album/1-2015-version/1440833098?l=es", 
"https://music.apple.com/us/album/abbey-road-remastered/1441164426?l=es",
"https://music.apple.com/us/album/the-beatles-the-white-album/1441133180?l=es",
"https://music.apple.com/us/album/sgt-peppers-lonely-hearts-club-band/1441164604?l=es",
"https://music.apple.com/us/album/rubber-soul/1441164359?l=es",
"https://music.apple.com/us/album/the-beatles-1967-1970-the-blue-album/1441133100?l=es",
"https://music.apple.com/us/album/the-beatles-1962-1966-the-red-album/1441132965?l=es",
"https://music.apple.com/us/album/revolver/1441164670?l=es",
"https://music.apple.com/us/album/love/1441133389?l=es",
"https://music.apple.com/us/album/let-it-be/1441164495?l=es",
"https://music.apple.com/us/album/help/1441164524?l=es",
"https://music.apple.com/us/album/magical-mystery-tour/1441163490?l=es",
"https://music.apple.com/us/album/a-hard-days-night/1441164416?l=es",
"https://music.apple.com/us/album/please-please-me/1441164816?l=es",
"https://music.apple.com/us/album/with-the-beatles/1441164362?l=es",
"https://music.apple.com/us/album/beatles-for-sale/1441165005?l=es",
"https://music.apple.com/us/album/let-it-be-naked/1441132606?l=es",
"https://music.apple.com/us/album/past-masters-vols-1-2/1441133181?l=es",
"https://music.apple.com/us/album/sgt-peppers-lonely-hearts-club-band-remix/1440881011?i=1440881016&l=es",
"https://music.apple.com/us/album/yellow-submarine/1441164525?l=es",
"https://music.apple.com/us/album/yellow-submarine-songtrack/1441132556?l=es"
];

const lyrics = [" ", 'AbbeyRoad', 'SgtPeppers', 'AHardDaysNight', 'BeatlesForSale', 'Help', 'LetItBe', 'MagicalMysteryTour',
'Revolver', 'RubberSoul', 'WhiteAlbum', 'WithTheBeatles', 'YellowSubmarine'];


const $select = document.querySelector("#album-selector");

//solo usar hasta posición 20 (luego ampliaré a 37)
let albums = [];
let titulos =[];
let selector = document.querySelector("#album-selector");


// Función encargada de traer los albums de la URL - FETCH -> [GET] 
const fetchAlbums = async (url = URL) => {
    try {
      const response = await fetch(url); 
      
      const  result = await response.json(); //  body 
      //saco últimas posicianes por info inválida
      albums = result.slice(0, 21);
      
      return albums;
    } catch (err) {
            console.error(err); 
    }
  };

   

 // Iterar títulos
const iterateTitulos = (albums) =>{
    albums.map((album) => loadTitulos(album.albumName))
}

const loadTitulos = (album) => {
 // console.log(album);
  const select = document.getElementById('album-selector');
  const option = `<option value="${album}">${album}</option>`;
  select.insertAdjacentHTML("beforeend", option);
}

//restablecer el DOM
const limpiar =() =>{
  document.querySelector("#message").style.visibility = 'hidden';
  iterateAlbums(albums);
  document.querySelector("#input").value="";
}

  // const showMessage = () => {
  //   // mostrar un mensaje de no encontrado 
  //   let mensaje = document.getElementById("message");
  //   mensaje.innerHTML = "No encontrado";
  //   document.querySelector("#message").style.visibility = 'visible';
    
  //   setTimeout(() => {
  //     limpiar();
  //   }, 2000);
    
  // };

  const limpiarSel = () =>{
    for(let i=0; i< selector.options.length;i++){
      selector.remove(i);
    }
  };

  //borrar del select y del dom
  // const del = (id) => {
  //   document.getElementById(id).remove(); 
  //   albums = albums.filter((album) => album.id != id); //
  //   console.log(id);

  //   limpiarSel();
  //   iterateTitulos(albums);
  //   albums.length === 0 ? showMessage() : null;
  // };

  // propiedades de albums
const createNode = ({ id, albumName, releaseDate, trackCount }) => {
    // columna con toda la información del album
    const shortDate = releaseDate.substr(0,10);
    const node = `    
      <div class="col-md-4 col-12 mb-3"  id="${id}">
          <div class="card h-100 mt-3 ml-3">
          <img class="foto img-responsive" alt="Sin imagen disponible" src="img\\${image[id]} " />
              <div class="card-body">
  
                  <h5 class="card-title">${albumName}</h5>
                  <p class="card-text">Fecha Edición : ${shortDate}</p>
                  <p class="card-text"> Tracks : ${trackCount}</p>
                  <p class="card-text"> <a href="${music[id]}" target=”_blank”>Visitar audio (página externa)</a></p>
                  <!-- <button onClick="del(${id})"  class="btn btn-danger btn-block">Borrar</button>-->
                  <!--<button onClick="del(${id})"  class="btn btn-info btn-block">Lista de Canciones</button>-->
              </div>
          </div>
      </div>
    `;



    document.getElementById("apiAlbum").insertAdjacentHTML("beforeend", node);
  };

//Busca un texto dentro de los nombres de los albums
const filtro = (origen, aBuscar) => origen.includes(aBuscar);

   // Iterate albums
const iterateAlbums = (albums) =>
albums.map((album) => createNode(album));

const mostrarAlbum = (titulo) => 
titulo.map((tit) => createNode(tit));

const clearNodes = () => {
  let node = document.getElementById("apiAlbum");
  node.innerHTML = "";
};
  
//   // Función encargada de buscar un album por nombre
// const searchAlbum = () => {
//     const { value: albumName } = document.querySelector("#input");
//     console.log(albumName);
//     const foundAlbums = albums.filter(
//       (album) => filtro(album.albumName.toLowerCase(), albumName.toLowerCase()));
    
//     if (foundAlbums.length>0){
//       clearNodes();
//       iterateAlbums(foundAlbums);
//       document.querySelector("#input").value="";
//     }else{
//       clearNodes();
//       showMessage();
//     }
    
//   };

  // Buscador
const selectedAlbum = () => {
  const { value : titulo} = document.querySelector("#album-selector");
  if(titulo=="Todos"){
    clearNodes();
    iterateAlbums(albums);
  }
  else{
    const foundTitulo = albums.filter(
      (album) => album.albumName.toLowerCase() == titulo.toLowerCase());
      
      if (foundTitulo.length>0){
       clearNodes();
       mostrarAlbum(foundTitulo);
        
      }el
        clearNodes();
      
        showMessage();
     }
  }



//Inicializo el DOM
async function start(){
    albums = await fetchAlbums();

    // document.querySelector("#message").style.visibility = 'hidden';
    // document.querySelector("#find").addEventListener("click", searchAlbum);
    document.querySelector("#album-selector").addEventListener("change", selectedAlbum);
    // document.querySelector("#all").addEventListener("click", searchAlbum);
    
    iterateAlbums(albums);
    iterateTitulos(albums);
}

window.onload = start();                                                                                                     