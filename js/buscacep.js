function limparCep() {
    document.getElementsByName("BuscarCep")[0].value = "";
    document.getElementsByName("endereco")[0].value = "";
    document.getElementsByName("Complemento")[0].value = "";
    document.getElementsByName("numero")[0].value = "";
    document.getElementsByName("bairro")[0].value = "";
    document.getElementsByName("cidade")[0].value = "";
    document.getElementsByName("estado")[0].value = "";

    document.getElementsByName("numero")[0].focus();
}

function BuscarCep() {

}