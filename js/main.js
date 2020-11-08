//const { isInteger } = require("lodash");

document.addEventListener('DOMContentLoaded', () => {

let form = document.createElement("form");
document.body.appendChild(form)
form.addEventListener("submit",ValidarForm)

const br = document.createElement("br");
form.appendChild(br.cloneNode());


let nombreSpan = document.createElement("span");
    nombreSpan.textContent = "Debes insertar el nombre";
    nombreSpan.id = "error-name";
    nombreSpan.style.display = "none"

let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.id = "nombre";
    nombre.placeholder = "Introduce tu nombre";

const labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre";

    form.appendChild(labelNombre);
    form.appendChild(br.cloneNode());
    form.appendChild(nombre);
    form.appendChild(nombreSpan)
    form.appendChild(br.cloneNode())



let apellidoSpan = document.createElement("span");
    apellidoSpan.textContent = "Debes insertar el apellido";
    apellidoSpan.id = "error-surname";
    apellidoSpan.style.display = "none"

let apellidos = document.createElement("input");
    apellidos.type = "text";
    apellidos.id = "apellidos";
    apellidos.placeholder = "Introduce tus apellidos";

const labelApellidos = document.createElement("label");
    labelApellidos.textContent = "Apellidos";

    form.appendChild(labelApellidos);
    form.appendChild(br.cloneNode());
    form.appendChild(apellidos);
    form.appendChild(apellidoSpan)
    form.appendChild(br.cloneNode())



let fechaSpan = document.createElement("span");
    fechaSpan.textContent = "Debes insertar la fecha de nacimiento";
    fechaSpan.id = "error-date";
    fechaSpan.style.display = "none"

let fecha = document.createElement("input");
    fecha.type = "date";
    fecha.id = "fecha";
    fecha.placeholder = "Introduce la fecha";

const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha";

    form.appendChild(labelFecha);
    form.appendChild(br.cloneNode());
    form.appendChild(fecha);
    form.appendChild(fechaSpan)
    form.appendChild(br.cloneNode())



let direccion = document.createElement("input");
    direccion.type = "text";
    direccion.id = "direccion";
    direccion.placeholder = "Introduce la calle y el numero";

const labelDireccion = document.createElement("label");
    labelDireccion.textContent = "Direccion";

    form.appendChild(labelDireccion);
    form.appendChild(br.cloneNode());
    form.appendChild(direccion);
    form.appendChild(br.cloneNode())



let codPostalSpan = document.createElement("span");
    codPostalSpan.textContent = "Debes insertar el codigo postal";
    codPostalSpan.id = "error-postCode";
    codPostalSpan.style.display = "none"

let codPostal = document.createElement("input");
    codPostal.type = "text";
    codPostal.id = "codPostal";
    codPostal.placeholder = "EJ: 46290";
    codPostal.maxLength = "5"
    codPostal.minLength = "5"

const labelCodPostal = document.createElement("label");
    labelCodPostal.textContent = "Codigo Postal";

    form.appendChild(labelCodPostal);
    form.appendChild(br.cloneNode());
    form.appendChild(codPostal);
    form.appendChild(codPostalSpan)
    form.appendChild(br.cloneNode())



let provinciaSpan = document.createElement("span");
    provinciaSpan.textContent = "Debes seleccionar una provicia";
    provinciaSpan.id = "error-province";
    provinciaSpan.style.display = "none"

let provincia = document.createElement("select");
    let option1 = document.createElement("option");
        option1.text = "Castellón";
        option1.id = "castellon";
        provincia.add(option1);
    let option2 = document.createElement("option");
        option2.text = "Valencia";
        option2.id = "valencia";
        provincia.add(option2);
    let option3 = document.createElement("option");
        option3.text = "Alicante";
        option3.id = "Alicante";
        provincia.add(option3);

const labelProvincia = document.createElement("label");
    labelProvincia.textContent = "Provincia";

    form.appendChild(labelProvincia);
    form.appendChild(br.cloneNode());
    form.appendChild(provincia);
    form.appendChild(provinciaSpan)
    form.appendChild(br.cloneNode())



let municipioSpan = document.createElement("span");
    municipioSpan.textContent = "Debes introducir un municipio";
    municipioSpan.id = "error-town";
    municipioSpan.style.display = "none"

let municipio = document.createElement("input");
    municipio.type = "text";
    municipio.id = "municipo";
    municipio.placeholder = "EJ: Almussafes";

const labelMunicipio = document.createElement("label");
    labelMunicipio.textContent = "Municipio";

    form.appendChild(labelMunicipio);
    form.appendChild(br.cloneNode());
    form.appendChild(municipio);
    form.appendChild(br.cloneNode()); 
    form.appendChild(municipioSpan)


let submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Continuar";
    form.appendChild(submit);
    form.appendChild(br.cloneNode())

    function ValidarForm() {
        let valid = true;
        if(nombre.value == "")
        {
            valid = false;
            event.preventDefault();
            document.getElementById("error-name").style.display = "block";
        }


        if(apellidos.value == "")
        {
            valid = false;
            event.preventDefault();
            document.getElementById("error-surname").style.display = "block"
        }
      
        if(fecha.value == "")
        {
            valid = false;
            event.preventDefault();
            document.getElementById("error-date").style.display = "block"
        }

          
        if(codPostal.value == "" ||isNaN(codPostal.value))
        {
            valid = false;
            event.preventDefault();
            document.getElementById("error-postCode").style.display = "block"
        }
        else if(codPostal.value != "" || isInteger(codPostal.value))
        {
            document.getElementById("error-postCode").style.display = "none";
        }
          
      
        if(municipio.value == "")
        {
            valid = false;
            event.preventDefault();
            document.getElementById("error-town").style.display = "block"
        }
    
        if(valid == false)
        {
            return valid;
        }
      }
})

