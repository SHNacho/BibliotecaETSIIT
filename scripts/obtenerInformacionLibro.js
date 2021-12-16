
var arrLibros = [
    {
        "nombre" : "calculo",
        "asignatura" : "calculo",
        "autores" : "Marcelino Cuevas",
        "edición" : "sexta",
        "unidades" : 5
    },
    {
        "nombre" : "algebra",
        "asignatura" : "algebra",
        "autores" : "Jose Padial",
        "edición" : "quinta",
        "unidades" : 5
    },
    {
        "nombre" : "analisis de datos",
        "asignatura" : "inteligencia de negocio",
        "autores" : "Jose Angel Lopez",
        "edición" : "Cuarta",
        "unidades" : 10
    },
    {
        "nombre" : "ciencia de datos",
        "asignatura" : "ciencia de datos",
        "autores" : "Marcelino Cuevas",
        "edición" : "sexta",
        "unidades" : 5
    },
    {
        "nombre" : "metaeuristicas",
        "asignatura" : "metaeuristica",
        "autores" : "Marcelino Cuevas",
        "edición" : "sexta",
        "unidades" : 5
    },
    {
        "nombre" : "programacion",
        "asignatura" : "fundamentos de programacion",
        "autores" : "Marcelino Cuevas",
        "edición" : "sexta",
        "unidades" : 5
    },
    {
        "nombre" : "c mas mas",
        "asignatura" : "fundamentos de programacion",
        "autores" : "Marcelino Cuevas",
        "edición" : "sexta",
        "unidades" : 5
    },
    {
        "nombre" : "direcciones ip",
        "asignatura" : "fundamentos de redes",
        "autores" : "Marcelino Cuevas",
        "edición" : "sexta",
        "unidades" : 5
    }
]


function obtenerInformacionLibro(nombreLibro) {

    var unidades_disponibles = 1;
    var autor_libro = 'Desconocido';
    var edicion = 'Primera';

    switch(nombreLibro){
        case 'calculo':
            unidades_disponibles = 5;
            autor_libro = 'Marcelino Cuevas';
            edicion = 'Sexta';
        break;

        case 'fisica':
        unidades_disponibles = 1;
        autor_libro = 'Jose Padial';
        edicion = 'Tercera';
        break;

        case 'algebra':
        unidades_disponibles = 7;
        autor_libro = 'Jose Padial';
        edicion = 'Quinta';
        break;

        case 'analisis de datos':
        unidades_disponibles = 7;
        autor_libro = 'Falete';
        edicion = 'Cuarta';
        break;

        case 'ciencia de datos':
        unidades_disponibles = 12;
        autor_libro = 'Ramon';
        edicion = 'Octava';
        break;

        case 'metaeuristicas':
        unidades_disponibles = 12;
        autor_libro = 'Ramon';
        edicion = 'Octava';
        break;

        case 'programacion':
        unidades_disponibles = 12;
        autor_libro = 'Ramon';
        edicion = 'Octava';
        break;

        case 'direcciones ip':
        unidades_disponibles = 12;
        autor_libro = 'Ramon';
        edicion = 'Octava';
        break;

        case 'c mas mas':
        unidades_disponibles = 12;
        autor_libro = 'Ramon';
        edicion = 'Octava';
        break;
    }

    if (unidades_disponibles == 0){
        return "El libro solicitado no está disponible. Le llamaremos cuando lo esté.";
    }
    else
        return  "Quedan " + unidades_disponibles + "unidades de " + nombreLibro + ". Su autor es " + autor_libro + ", y la edición disponible es la " + edicion + ".";
}

function librosAsignaturaES(asignatura) {
    var libros = ""

    for(var i = 0; i < arrLibros.length; i++){
        if(arrLibros[i].asignatura == asignatura){
            libros += arrLibros[i].nombre + ", Autor " + arrLibros[i].autores;
        }
    }

    return libros
}