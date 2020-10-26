new Vue({
	el:'main',
	data:{
		minimo:200,
		busqueda:'',
		mostrar:true,
		mensajes:{
			
			title:'Viajes',
            title2:'Viajes paraíso',
            lista: 'Lista de deseos',
			
		},
			lugar:[
		{
			titulo:'Krystal',
			pais:'México',
			ciudad:'Puerto Vallarta',
			precio:2300,
			inStock:true,
		},
		{
			titulo:'Casa Lucila Hotel Boutique',
			pais:'Mexico',
			ciudad:'Mazatlan',
			precio:3500,
			inStock:false,
		},
		{
			titulo:'Grand fiesta americana',
			pais:'México',
			ciudad:'Cancún',
			precio:5300,
			inStock:true,
		},
        ],
            lieu2:[
		{
			titulo:'Pullman Paris Tour Eiffel',
			pais:'Francia',
			ciudad:'París',
			precio:5250,
			inStock:true,
		},
		{
			titulo:'Luxor Hotel',
			pais:'Estados Unidos',
			ciudad:'Las vegas',
			precio:800,
			inStock:true,
		},
		{
			titulo:'Signiel Seoul',
			pais:'Corea del norte',
			ciudad:'Seul',
			precio:9000,
			inStock:true,
		},
	  ],
          lieu3:[
		{
			titulo:'Napoleón Hotel Roma',
			pais:'Italia',
			ciudad:'Roma',
			precio:10000,
			inStock:false,
		},
     ],
	},

	computed:{
		
		buscarLugar(){
			return this.lugar.filter((lugar)=> lugar.ciudad.includes(this.busqueda));
		},
        buscarLugar2(){
			return this.lieu2.filter((lieu2)=> lieu2.ciudad.includes(this.busqueda));
		},
        
		LugarPorPuntuacion(){
			return this.lugar.sort((a,b)=> a.precio - b.precio);
		}, 
		mejoresLugares(){
			return this.lugar.filter((lugar)=> lugar.precio >= this.minimo );
		},
        mejoresLugares2(){
			return this.lieu2.filter((lieu2)=> lieu2.precio >= this.minimo );
		},
         mejoresLugares3(){
			return this.lieu3.filter((lieu3)=> lieu3.precio >= this.minimo );
		},

	}


});
const vm=new Vue({
	el:'#com',
	data:{
		nuevoComentario:null,
		comentarios:[
						

		],
	},
	methods:{
		agregarComentario(){
			//console.log('Guaoi');
			//this
			this.comentarios.unshift(this.nuevoComentario);
			this.nuevoComentario=null;
		}
	}
});


    //titulo/
    var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

