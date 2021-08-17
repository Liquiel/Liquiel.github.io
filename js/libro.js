//Creando el objeto
var book = new Object();
//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
var showinfo = document.getElementById("mostrar");
if(showinfo.addEventListener){
showinfo.addEventListener("click", function(){
createObject(document.frmbook);
}, false);
}
else if(showinfo.attachEvent){
showinfo.attachEvent("onclick", function(){
createObject(document.frmbook);
});
}
}
// Creando el nuevo objeto
function createObject(form){
book.autor = form.txtautor.value;
book.ape = form.txtape.value;
book.titulo = form.txtitulo.value;
book.precio =  form.txtprecio.value;
book.imag = document.getElementById("img");
showProperties(book, "InfoBook");
}
function showProperties(objeto, objName){
var infBook = "";
var tblBook = "";
var info = document.getElementById('infolibro');
for(var i in objeto){
infBook = infBook + objName + "." + i + " = " + objeto[i] + "\n";
}
if(!confirm(infBook + "\n\n¿Es esta información correcta?")){
frmbook.txtautor.value = "";
frmbook.txtape.value = "";
frmbook.txtitulo.value = "";
frmbook.txtcat.value = "a";
frmbook.txtprecio.value = "a";
frmbook.img.value = "";
}

	tblBook += "<table class=\"carinfo\">\n";
	tblBook += "<thead>\n\t<tr>\n";
	tblBook += "\t\t<th colspan=\"2\">Datos del libro</th>\n";
	tblBook += "\t</tr>\n</thead>\n";
	tblBook += "<tbody>\n\t";
	tblBook += "\t<tr>\n\t\t<td>Nombre autor: </td>\n";
	tblBook += "\t\t<td>" + book.autor + "</td>\n\t</tr>\n";
	tblBook += "\t<tr>\n\t\t<td>Apellido autor: </td>\n";
	tblBook += "\t\t<td>" + book.ape + "</td>\n\t</tr>\n";
	tblBook += "\t<tr>\n\t\t<td>Título: </td>\n";
	tblBook += "\t\t<td>" + book.titulo + "</td>\n\t</tr>\n";
	tblBook += "\t<tr>\n\t\t<td>Precio: </td>\n";
	tblBook += "\t\t<td>" + book.precio + "</td>\n\t</tr>\n";
	tblBook += "\t<tr>\n\t\t<td>Imagen: </td>\n";
	tblBook += "\t\t<td>" + book.imag + "</td>\n\t</tr>\n";
	tblBook += "\t</tbody>\n</table>\n";

info.innerHTML = tblBook;
}
var inputFiles = document.getElementById("img"); 
var GetFiles = inputFiles.files;

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}

function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("file").src = reader.result;
    }
  }
}
