function exibirPaginaDeCadastro(request, response) {
  response.render('cadastro')
}


function criarConta(request, response) {
  console.log(request.body)
  response.render('cadastro')
}

module.exports = { exibirPaginaDeCadastro, criarConta }