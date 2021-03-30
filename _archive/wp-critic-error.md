---
title: "Ha um erro crítico no seu Wordpress!"
date: '2020-12-09'
category: Wordpress
tags: 'error, updates, backup, cms'
description: "Minhas experiências com atualizações no WP"
---

Recentemente eu comecei um curso de Wordpress no Curso em Video, muito bom por sinal, até ai tudo bem, porem apareceu uma atualização do Wordpress pra versão _5.6_, eu estava usando a versão _5.5.2_.

Eu com minha agonia de ver notificações de pendências fui todo feliz atualizar saporra, porem eu nunca tinha atualizado o core do WP antes, e eu achei que era instantâneo, ou que ao menos tivesse um indício que estava atualizando, não tinha.

A tela ficou parada, teve uma mensagem de que estava atualizando, porem a tela não recarregava, não tinha nenhum barra de progresso, nem um GIF com uma bolinha girando, e ja estava demorando pra dar uma resposta. Como achei que tinha travado cliquei de novo no botão de atualizar, mas uma 2 ou 3 vezes, volto pro site, e me deparo com isso:

![](https://i.ibb.co/9y6xjWS/wp-erro.jpg)

A partir daqui fui seguindo alguns passos que sempre devemos seguir pra tentar resolver um erro:

1. Backup:

Fiz um copia da pasta onde esta instalado o Wordpress do meu host para a minha máquina local usando o Filezilla.
Isso estava demorando pra cassete porque são muitos arquivos e pastas, então decidi prosseguir sem backup mesmo. Altamente NÃO RECOMENDADO, bom e velho _faça o eu falo mas não faça o que eu faço_.

2. Identificar o Problema:

Bom, eu tentei atualizar o Wordpress pra versão 5.6, estava demorando, achei que tinha travado e cliquei pra atualizar de novo, depois disso deu esse problema. Acho que a esse ponto esta bem óbvio qual foi o erro.

A partir da versão **5.2** do wordpress, existe um modo restauração, que consiste em mandar um email para o desenvolvedor
com o link de restauração do wordpress. Email esse que eu não recebi! não sei se tinha que fazer alguma outra configuração pra isso,
mas nessa parte eu rodei.

Plano B

Analisar os logs.

Pra gerar os logs é necessário abrir o arquivo `wp-config.php` e editar a linha

```php
define( 'WP_DEBUG', false );
```
para
```php
define( 'WP_DEBUG', true );
```

e adicionar mais as linhas
```php
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );
define( 'SCRIPT_DEBUG', true );
```

Feito isso, deve aparecer um arquivo `debug` na pasta `wp-content/`, o que também não apareceu.
O que mudou foi o erro:
![](https://i.ibb.co/LhSZ273/screenshot-20201209-185248.png)

como sou marinheiro de primeira viagem com Wordpress, estava sem muitas opções e decidi reinstalar a versão **5.5.2** de um zip que tinha salvo no meu PC, demorou pra cassete, mas valeu a pena, de ínicio começou apontando o mesmo erro no arquivo `wp-settings.php`, mas parece que foi um bug no Filezilla de não substituir completamente os arquivos, foi so substituir o arquivo em específico manualmente e tudo voltou ao normal.


História da moral:
> _**FAÇA BACKUP CASSETE!**_

Apareceu mais uma atualização do Microthemer e a atualização do WP ta la, pendente, agora dificilmente vou perder essa sensação de medo de atualizações, tive esse tipo de problema com atualizações a um tempo atrás com o Parrot OS, fiquei um bom tempo com receio de atualizações de SO, agora estamos aqui novamente mas com Wordpress.

Agora vou criar vergonha na cara e caçar um bom plugin de Backup, ou fazer manualmente, mesmo que demorado. Sei que manualmente não é a melhora forma, porque em um projeto grande isso pode ser muito custoso, mas por agora, como estou aprendendo, é o jeito.

---

referencias:
- [Saiba o que é erro crítico WordPress e como resolver](https://rockcontent.com/br/blog/erro-critico-wordpress/)
