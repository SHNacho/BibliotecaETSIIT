function obtenerInformacionLibro(nombreLibro) {

    var unidades_disponibles = 1;
    var autor_libro = 'Unknown';
    var edicion = 'First';

    switch(nombreLibro){
        case 'calculus':
            unidades_disponibles = 11;
            autor_libro = 'Marcelino Cuevas';
            edicion = 'Sixth';
        break;

        case 'physics':
        unidades_disponibles = 12;
        autor_libro = 'Jose Padial';
        edicion = 'Third';
        break;

        case 'algebra':
        unidades_disponibles = 13;
        autor_libro = 'Jose Padial';
        edicion = 'Fifth';
        break;

        case 'c plus plus':
        unidades_disponibles = 14;
        autor_libro = 'Falete';
        edicion = 'Fourth';
        break;

        case 'data analysis':
        unidades_disponibles = 15;
        autor_libro = 'Ramon ';
        edicion = 'Eigth';
        break;

        case 'data science':
        unidades_disponibles = 16;
        autor_libro = 'Ramon ';
        edicion = 'Third';
        break;

        case 'metaheuristics':
        unidades_disponibles = 17;
        autor_libro = 'Ramon ';
        edicion = 'Eleventh';
        break;

        case 'programming':
        unidades_disponibles = 18;
        autor_libro = 'Ramon ';
        edicion = 'First';
        break;

        case 'ip directions':
        unidades_disponibles = 19;
        autor_libro = 'Ramon ';
        edicion = 'Second';
        break;
    }

    if (unidades_disponibles == 0){
        return "The asked book is not available at this time. There are 0 units left. We will call you when there is an available unit.";
    }
    else
        return  "There are " + unidades_disponibles + "units left of " + nombreLibro + ". Its autor is " + autor_libro + ", and the edition number is the " + edicion + ".";
}