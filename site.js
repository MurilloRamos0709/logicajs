/**
 * @author Arnaldo Victor Yamawaki Alves
 */
let onde = window.location.pathname;
alert (onde)
function abrirSite() {
    let Entrada
    Entrada = parseInt(frmAbrir.txtEntrada.value)
    switch (Entrada) {
        case 1:
            window.location = "/C:/logica/caculoIMC/index.html";
            break
    }
    switch (Entrada) {
        case 2:
            window.location = "/C:/logica/temperatura/index.html";
            break
    }
    switch (Entrada) {
        case 3:
            window.location = "/c:/logica/Churrascoladora/index.html";
            break
    }
    switch (Entrada) {
        case 4:
            window.location = "/C:/logica/conversaoindex.html";
            break
    }
    switch (Entrada) {
        case 5:
            window.location = "/C:/logica/jogoDado/index.html";
            break
    }
    switch (Entrada) {
        case 6:
            window.location = "/c:/logica/precoDaHora/index.html";
            break
    }
    switch (Entrada) {
        case 7:
            window.location = "/C:/logica/raio/index.html";
            break
    }
}