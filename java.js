
function Pokemon(n,v,a)	
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

function inicio()
{
	alert("Esto es despues del inicio")
	var rattata = new Pokemon("Rattata", 40, 2);
	rattata.vida = rattata.vida - 13;

	datosPokemon.innerHTML = rattata.nombre += rattata.vida += rattata.ataque; 

}

alert("Esto es antes del inicio");


//tarea=datos de prueba: vida,ataque y grito
//
