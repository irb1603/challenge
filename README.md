# challenge
# Sorteio Amigo Secreto

Este projeto é uma página web simples que permite sortear um amigo secreto de forma aleatória. Os usuários podem inserir nomes de participantes, e a página irá sortear um nome aleatório da lista.

## Finalidade

O objetivo deste projeto é fornecer uma ferramenta fácil e rápida para realizar sorteios de amigo secreto online. É ideal para pequenos grupos de amigos, familiares ou colegas de trabalho que desejam realizar um sorteio de forma simples e divertida.

## Como usar

1.  Abra a página `index.html` em seu navegador.
2.  Digite o nome de um participante no campo de texto e clique no botão "Adicionar".
3.  Repita o passo 2 para adicionar todos os participantes.
4.  Clique no botão "Sortear" para realizar o sorteio.
5.  O nome do amigo secreto sorteado será exibido na tela.

## Como foi feito

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript.

* **HTML (`index.html`)**: Estrutura da página, incluindo campos de entrada, botões e a área de exibição do resultado.
* **CSS (`style.css`)**: Estilos básicos para a página, como fonte, alinhamento e espaçamento.
* **JavaScript (`script.js`)**: Lógica do sorteio, incluindo a adição de nomes à lista, a geração de um número aleatório e a exibição do resultado.

A lógica principal do sorteio é implementada em JavaScript. Ao clicar no botão "Sortear", a página gera um número aleatório entre 0 e o número de participantes na lista. O nome correspondente a esse número é então exibido como o amigo secreto sorteado.

## Funcionalidades futuras

* Impedir que a mesma pessoa seja sorteada duas vezes.
* Enviar os resultados por e-mail.
* Adicionar um design mais elaborado.
* Possibilidade de adicionar restrições (ex: não sortear casais juntos).

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma ideia de melhoria ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT.
