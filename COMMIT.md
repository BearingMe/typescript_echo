# Padrão de Commits

## Formato da Mensagem de Commit

> Assim como nos cometários do arquivos você **pode** enviar commits tanto em inglês quanto português, sendo este ultimo o mais recomendado. Isso ajuda a melhorar a clareza das descrições e permite focar no que realmente importa, o código.    

Cada commit consiste em um **header**, **body** e **footer**, assim como na semântica do HTML. Porém, diferente de Body e Footer, a mensagem do Header tem sua própria formatação, a qual inclui um **tipo** e o **assunto** abordado:   

```fundamental
[TIPO] <assunto>
<ESPAÇO EM BRANCO>
<body>
<ESPAÇO EM BRANCO>
<footer>
<nome do autor>
```

O **header** é obrigatório. Sendo ele a unica seção com essa exigência.  

As linhas de commit não podem passar de 80 caracteres. Isso permite que seja mais fácil de ler 
no github e em outras ferramentas. O próprio vscode formata isso para você.      

### Tipo

O tipo deve ser um dos seguintes, escrito em inglês, maiúsculo e entre colchetes:

* **FEAT**: Uma nova funcionalidade
* **FIX**: Um bug corrigido
* **DOCS**: Mudanças na documentação
* **REFACTOR**: Uma mudança no código que não cria funcionalidade nem corrige um bug

### Assunto

> O assunto é o que vai no Header depois do tipo  

O assunto deve conter uma descriçâo clara da mundaça:  

* use o imperativo, no presente: "muda", não "mudou" ou "vai mudar"
* não use a primeira letra maiúscula
* não use ponto final

### Body

Assim como no **assunto**, use o impertivo, no presente.  
O Body também deve conter a motivação para a mudança   

### Footer

O Footer deve conter qualquer informação sobre **breaking changes**, ou seja, mudanças que podem fazer outras pessoas terem a necessidade de alterar seu código, também é o local para colocar [as issues que seu commit resolve][closing-issues].    

### Quando commitar

Não existe uma forma correta de usar o git, mas existem várias formas erradas. Aqui algumas dicas que podem ser uteis:  

* **Commite com frequência**: Adicionou um método? Renomeou arquivos? Mudou algo? Commite. O git é o melhor amigo do seu botão de save, sempre que usar um, use o outro. Apenas garanta que o **código funcione** antes.
* **Você não precisa mandar para o GitHub cada commit**: Criar um commit é simples, rápido, e levando em conta nosso padrão, você pode fazer com duas linhas de código. Isso não quer dizer que deva mandar para a núvem cada atualização. Faça no seu tempo.
* **O mundo não vai acabar se você esquecer do git add .**: Esse ponto final significa todos os arquivos. Se você esqueceu de commitar e alterou toda a existência da vida na terra durante esse meio tempo. Selecione arquivo por arquivo, ou suas pastas, e descreva individualmente. Agrupe eles de acordo com sua funcionalidade e, caso tenha feito mais de um dos tipos descritos, basta descrever cada um junto no Header (por isso devem estar entre colchetes) 



[closing-issues]: https://help.github.com/articles/closing-issues-via-commit-messages/
