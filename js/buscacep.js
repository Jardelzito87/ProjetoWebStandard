
const urlViaCep = "https://viacep.com.br/ws/[[CEP]]/json/";
 

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
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    let cep = document.getElementsByClassName("BuscarCep")[0].value;

    let url = urlViaCep.replace("[[cep]]", cep);

    fetch(url,requestOptions)
         .then((response) =>{
            if(response.ok){
                return response.json(); //convertendo o a resposta em JSON
            }

            throw new Error(`ERRO: HTTP ${reponse.status}`);

         })
         .then((result) =>{
            document.getElementsByName("endereco")[0].value = result.logradouro || "";
            document.getElementsByName("complemento")[0].value = result.complemento || "";
            document.getElementsByName("bairro")[0].value = result.bairro || "";
            document.getElementsByName("cidade")[0].value = result.localidade || "";
            document.getElementsByName("estado")[0].value = result.uf || "";   
            
            document.getElementsByName("endereco")[0].disabled = true
            document.getElementsByName("complemento")[0].disabled = true
            document.getElementsByName("bairro")[0].disabled = true
            document.getElementsByName("cidade")[0].disabled = true
            document.getElementsByName("estado")[0].disabled = true

            document.getElementsByName("numero")[0].focus();

         })
         .catch((erro) =>{
            alert(`ERRO ao buscar o cep\n${erro}`)
         });
}