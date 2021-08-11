# Padrão de Commits

## Formato da Mensagem de Commit

> Assim como nos cometários do arquivos você **pode** enviar commits tanto em inglês quanto português, sendo este ultimo o mais recomendado. Isso ajuda a melhorar a clareza das descrições e permite focar no que realmente importa, o código.    

Cada commit consiste em um **header**, **body** e **footer**, assim como na semântica do HTML. Porém, diferente de Body e Footer, a mensagem do Header tem sua própria formatação, a qual inclui um **tipo** e o **assunto** abordado:   

```fundamental
<tipo>: <assunto>
<ESPAÇO EM BRANCO>
<body>
<ESPAÇO EM BRANCO>
<footer>
<nome do autor>
```

O **header** é obrigatório. Sendo ele a unica seção com essa exigência.  

As linhas de commit não podem passar de 80 caracteres. Isso permite que seja mais fácil de ler 
no github e em outras ferramentas. O próprio vscode formata isso para você.     

### Reverter

Se o commit reverte outro, ele deve começar com a tag `revert:`, seguido pelo Header do commit revertido. Isso ajuda a manter uma melhor referência do problema.   
O Body deve dizer: `Isso reverte o commit <hash>`. Acredito que se você conseguiu reverter o commit então provavelmente deve saber o que é o hash.  
Um commit com esse formato é automaticamente criado pelo comando `git revert`.  

### Tipo

O tipo deve ser um dos seguintes, escrito em inglês e maiúsculo:

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




[closing-issues]: https://help.github.com/articles/closing-issues-via-commit-messages/