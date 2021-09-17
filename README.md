![iFuture_Readme_Header](https://user-images.githubusercontent.com/85365177/132917268-959dfe30-a6b4-4965-b258-e4b99b918748.png)

## Link do Surge:  
- https://lovelace-labe-food3-c.surge.sh/


## Planejamento Inicial

- Foi criado um board no Trello contendo todas as tarefas a serem feitas pelos integrantes do grupo
- Todas as tarefas tiveram suas complexidades estimadas por pontos
- Todas as tarefas tiveram uma definição de feito
- Foram anexados materiais gráficos e links nos cards para facilitar o trabalho de quem pegar a tarefa
- Todos os cards possuem descrições detalhadas do que precisa ser feito
- Todas as tarefas tiveram um (ou mais) responsável(is).
- Nosso board de Kanban contém as seguintes colunas:
    - A fazer
    - Em progresso
    - Em teste
    - Pronto

- Foi respeitado o layout de todas as páginas criadas pela Design da Labenu
- Foi respeitada a definição da paleta de cores cirada pela Design
- Foi planejado como iríamos cumprir todos os requisitos
- Construído um wireframe (esqueleto do site) na plataforma Figma


## Implementações

- O projeto foi todo construído para ser um aplicativo Mobile. Portanto focamos na responsividade.
- Para este projeto nós consumimos dados da API da LabeFoods.

- Ao entrar no site pela primeira vez, o usuário será recebido com uma animação mostrando a logo da empresa iFuture Foods.
- Na sequência o usuário irá visualizar a tela de Login.
- Nesta tela de Login será possível clicar em um link para criar um cadastro ou realizar o Login caso o usuário já possua um cadastro.

- Página de Login:

    - Nesta página o usuário deve fornecer o e-mail cadastrado e a senha.
    - No campo de senha, foi implementada a funcionalidade de esconder ou mostrar a senha, caso o usuário aperte em um botão específico (ícone de um olho).
    - Ao realizar o Login foi criado uma lógica em que, se o usuário já possuir endereço completo cadastrado, ele será redirecionado para a página Home, caso não tenha endereço cadastrado, ele será redirecionado automaticamente para a página de cadastro de endereço.
    - Foram implementadas validações nos formulários onde o usuário deve digitar um e-mail em um formato válido. Além disso o usuário deverá digitar uma senha de no mínimo 6 dígitos. 
    - Caso o usuário ainda não possua cadastro, ele pode clicar em um link que leva para a página de cadastro.
   

- Página de Cadastro de Endereço:
    - Conforme exigido nas especificações deste projeto [documentação da API], todo usuário para ter permissão de navegar por todas as páginas do aplicativo, deve possuir um endereço cadastrado.
    - Ao salvar um endereço, é gerado um token de acesso, que substitui o token anterior gerado pelas requisições de Login ou Cadastro de Usuário.

- Página de Cadastro de Usuário:
    - Nesta página o usuário deve fornecer nome, e-mail, cpf, senha e confirmação de senha. 
    - Todas as informações são obrigatórias.
    - Não podem ser criados dois usuários com o mesmo email ou CPF.
    - Foram implementadas validações nos formulários onde o usuário deve digitar um CPF válido de acordo com o formato padrão de CPF. Além disso o usuário deverá cadastrar uma senha de no mínimo 6 dígitos. O e-mail também sofre validações e o usuário deve digitar um e-mail em um formato válido.
    - O usuário que está criando seu cadastro com certeza não possui um endereço cadastrado, portanto ao clicar no botão criar, ele é automaticamente redirecionado para a Página de Cadastro de Endereço.
    - O usuário ao criar seu cadastro de usuário e depois salvar seu endereço, é redirecionado para a página Home.

- Página Home [Lista de Restaurantes]
    - Ao entrar na página Home o usuário verá os cards dos restaurantes mostrando suas informações básicas:
        - A logo do restaurante
        - Nome do restaurante
        - Tempo médio de entrega
        - Taxa de Entrega
        - Categoria do Restaurante
    
    - No topo da tela temos um campo de Busca, onde o usuário pode buscar restaurantes pelo nome.
    - Ao clicar no campo de busca os cards com as informações dos restaurantes desaparecem e é mostrado um texto com instruções de busca ao usuário.
    - O resultado da busca retorna para o usuário um ou mais Cards de Restaurante agora filtrados por nome.
    - Logo abaixo temos um scroll lateral, onde o usuário pode clicar e selecionar apenas os restaurantes de uma determinada categoria, como por exemplo: Árabe, Hamburguer, Italiana ou Petiscos.
    - Ao clicar em uma determinada categoria o usuário verá o Card de Restaurante daquela categoria.
    - Finalmente ao clicar na foto do restaurante ou no Card do Restaurante, o usuário será redirecionado para a Página de Detalhes do Restaurante.

- Página de Detalhes do Restaurante:
    - Nesta página o usuário verá as informações principais do restaurante, nome, logo do restaurante, categoria, tempo médio de entrega, taxa de entrega e endereço do restaurante.
    - Logo abaixo temos os cards dos produtos vendidos pelo restaurante. Esses cards estão organizados por categoria e possuem um botão Adicionar, onde o usuário já pode clicar e começar a adicionar os produtos no carrinho de compras.
    - Os cards mostram a foto do produto, nome do produto, descrição do produto e preço.
    - Ao clicar no botão Adicionar foi criado uma lógica para mostrar o componente Modal. Este componente aparece na tela em destaque mas mantém o usuário na mesma página.
    Esta função permite ao usuário selecionar facilmente a quantidade de produtos que ele deseja adicionar ao carrinho, bastando então clicar no botão "Adicionar ao carrinho" para confirmar.
    - A medida que o usuário adiciona produtos ao carrinho é mostrada a quantidade de produtos adicionada dentro de cada card de produto.
    - Quando o usuário adiciona algum produto o botão que possuia o texto "Adicionar" passa a ter o texto "Remover", se o usuário clicar em Remover, o contador zera, remove o item do carrinho e o botão volta ao estado de Adicionar.
    - Após adicionar todos os produtos que gostaria de pedir, o usuário pode confirmar o pedido na tela de carrinho, clicando no Footer em um ícone de carrinho de compras

- Página de Carrinho de Compras:
    - Nesta página o usuário poderá ver os cards dos produtos que ele adicionou anteriormente, onde aparecem o sub-total por produto, a quantidade de cada produto, o valor da taxa de entrega e o total a pagar. Aqui nesta tela também é possível remover produtos clicando no botão Remover.
    - Na seção Forma de Pagamento o cliente pode escolher entre Dinheiro e Cartão de Crédito e por fim temos um botão de Confirmar onde o cliente realiza o pedido.
    - Após confirmar e realizar o pedido, o cliente é redirecionado para a tela Home. Neste momento como existe um pedido recente, aparecerá na tela uma mensagem destacada com fundo vermelho, mostrando ao cliente que existe um pedido em andamento. Esta mensagem desaparece automaticamente após 5 segundos.
    - O cliente terá um histórico de pedidos que será mostrado na tela Meu Perfil [Perfil do Usuário]

- Página de Perfil do Usuário:
    - Nesta página o cliente poderá conferir alguns dados de cadastro como:
        - Nome completo
        - E-mail de cadastro
        - CPF
        - Endereço
        - Histórico de Pedidos
    
    - Aqui o usuário poderá clicar em dois botões que levam para outras telas, nessas páginas será possível editar suas informações de Perfil, e também editar seu endereço.
    - Caso o usuário já tenha realizado algum pedido ele aparecerá na seção Histórico de Pedidos.

- Página de Edição do Perfil do Usuário:
    - Ao entrar nessa página aparecem 3 campos já preenchidos automaticamente, onde o usuário poderá editar e salvar novas informações. Os campos são:
        - Nome
        - E-mail
        - CPF

- Página de Edição do Endereço do Usuário:
    - Ao entrar nessa página aparecem 6 campos já preenchidos automaticamente, onde o usuário poderá editar e salvar novas informações. Os campos são:
        - Logradouro
        - Número
        - Complemento [Apto / Bloco]
        - Bairro
        - Cidade
        - Estado

- Componente Header 
    - No topo da tela temos a Header mostrando o título da página em que o usuário se encontra.
    - Em alguns casos, dependendo da página, teremos um botão de voltar representado por uma seta. 

- Componente Footer
    - Aqui temos os botões onde o usuário poderá facilmente navegar pelas seções do aplicativo.
    - Temos 3 botões representados por ícones:
        - No ícone de Casa o usuário será levado para a página Home
        - No ícone de Carrinho de Compras o usuário será levado para a página de Carrinho de Compras
        - No ícone de Perfil, o usuário será levado para a Página de Perfil do Usuário
 

## Implementações Finais e Últimas Verificações

- Implementamos Loadings sempre que o site estiver carregando alguma requisição

- Implementado lógica em que não é possível realizar dois pedidos ao mesmo tempo. 
Para realizar outro pedido, o usuário deve esperar o seu pedido ativo ser concluído.

- Construída interface fácil e intuitiva de se operar

- Realizada a integração com a API

- Revisado a indentação do código

- Nomenclatura de variáveis dentro do padrão e sempre no mesmo idioma

- Verificado se não foi deixado nenhum log ou registro desnecessário pelo código

- Verificado se isolamos constantes que se repetem em arquivos separados

- Implementado organização dos arquivos do projeto em pastas separadas

- Requisições não estão dentro dos componentes visuais

- Não 'forçamos' a atualização com o método reload()

- Não causamos um loop infinito nas requisições chamadas no useEffect

- Verificado se código mostra as mensagens de erro enviadas pelo back para o usuário, e não apenas no console

- Implementado uso do Global State em uma parte da aplicação

## Integrantes do Grupo

- [Tiago Harumitsu Kodama](https://github.com/tiagoharumitsukodama)
- [Rafael Fernandes Machado](https://github.com/rafaelmach) 
- [Gustavo Carvalho Guimarães](https://github.com/GustavoCarv) 
- [Rafael Nascimento Silva](https://github.com/rafansilva) 
- [Samyr Chiade Hissa Filho](https://github.com/SamyrHissa) 

- [Labenu](https://www.labenu.com.br/) - Turma Lovelace


## Imagens:

![image](https://user-images.githubusercontent.com/85365177/132996732-5733167d-e50e-4282-9498-0d9536799e7f.png)

![image](https://user-images.githubusercontent.com/85365177/132996845-b6a0d10c-0fee-4804-89ee-872cd6766ced.png)

![image](https://user-images.githubusercontent.com/85365177/132996890-96f395a9-ab0e-42f3-bc9e-f681fa38cd50.png)

![image](https://user-images.githubusercontent.com/85365177/132996769-59148514-7253-48d4-a7af-4fe8b6446d4f.png)

![carrinho](https://user-images.githubusercontent.com/31461569/133005514-eab28ec7-9ef9-4e06-8647-b31772d5e2b3.png)

