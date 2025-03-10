# AmigoSecreto
# Amigo Secreto - ONE Oracle Next

## Descrição do Projeto
O projeto "Amigo Secreto" é uma aplicação web desenvolvida durante o programa ONE (Oracle Next Education), uma iniciativa da Oracle em parceria com a Alura, que visa capacitar pessoas em tecnologia.

A aplicação permite aos usuários gerenciar uma lista de amigos e sortear um amigo secreto de forma aleatória.

## Funcionalidades Principais
1. **Adicionar Amigos**: Os usuários podem adicionar novos amigos à lista, desde que o nome não esteja duplicado.
2. **Formatar Nomes**: Ao adicionar um novo amigo, o nome é formatado automaticamente, com a primeira letra em maiúsculo e o restante em minúsculo.
3. **Sortear Amigo Secreto**: Quando o usuário clica no botão "Sortear Amigo", um nome é selecionado aleatoriamente da lista de amigos e exibido na página.
4. **Validação de Entrada**: O programa verifica se o campo de entrada está vazio ou se o nome já existe na lista antes de adicioná-lo.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Desafios Enfrentados
Durante o desenvolvimento deste projeto, alguns desafios foram encontrados, como:

1. **Inicialização da variável `amigos`**: Inicialmente, houve um problema com a declaração da variável `amigos`, que causava um erro de referência. Isso foi resolvido posicionando a declaração e inicialização da variável antes das funções que a utilizavam.
2. **Formatação dos Nomes**: Para formatar os nomes com a primeira letra em maiúsculo, foi necessário converter a entrada do usuário para uma string antes de aplicar os métodos de manipulação de strings.
3. **Verificação de Nomes Duplicados**: Implementar a lógica para verificar se um novo nome já estava presente na lista de amigos foi um desafio, mas foi resolvido usando o método `includes()`.

## Aprendizados
Ao desenvolver este projeto, foram adquiridos os seguintes aprendizados:

- Manipulação do DOM (Document Object Model) usando JavaScript.
- Implementação de funções para atualizar a interface do usuário.
- Tratamento de eventos, como cliques em botões.
- Utilização de estruturas de controle, como `if-else` e `for`.
- Familiarização com o conceito de protótipos em JavaScript.

## Hospedagem
O projeto "Amigo Secreto" está hospedado na plataforma Vercel, que é uma solução de hospedagem e implantação de aplicações web. Você pode acessar o site do projeto através do seguinte link:

https://vercel.com/thaise-araujos-projects/amigo-secreto

## Contribuição
Este projeto foi desenvolvido como parte do programa ONE Oracle Next. Caso você tenha sugestões de melhorias ou queira contribuir, sinta-se à vontade para abrir uma issue ou enviar um pull request.