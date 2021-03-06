# inf325-trabalho

Repositório para desenvolvimendo do trabalho final da disciplina de INF325 do curso de especialização em Engenharia de Software da Unicamp.

#### Link do repositório no GitHub: (https://github.com/erikjborges/inf325-trabalho)

### Recomendação

Para uma visualização rápida do trabalho realizado, recomendamos ver o arquivo [Jupyter Notebook](jupyter-work/VendedoresProdutos_Mongo.ipynb)

Também é possível utilizar o link do Binder na documentação abaixo.

## Organização dos arquivos

 - binder/: Pasta de arquivos de configuração do Binder;
 - docker-compose.yml: Arquivo de configuração do Docker Compose para subir os containeres do projeto;
 - jupyter-work/: Pasta contendo os notebooks do Jupyter utilizados no desenvolvimento do projeto e para testes;
 - LICENSE: Arquivo de licença do projeto;
 - queries/: Pasta contendo as buscas no banco de dados Mongo desenvolvidas para esse projeto, em formato Mongo Shell.


## Setup do projeto utilizando Binder


Foi configurado um ambiente no Binder para facilitar o teste do sistema, para acessa-lo basta clicar no link abaixo:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/erikjborges/inf325-trabalho/master?filepath=jupyter-work%2FVendedoresProdutos_Mongo.ipynb)


## Setup do projeto utilizando Docker / Docker Compose

### Dependências

Você deve ter instalado na sua máquina os seguintes softwares:
 - Docker (https://docs.docker.com/get-docker/);
 - Docker Compose (https://docs.docker.com/compose/install/);

### Setup

Para realizar o setup dos containers em sua máquina, você deve dar o seguinte comando em ser terminal, dentro da pasta raiz do projeto:

```shell

docker-compose up

```

Após a execução desse comando, você pode acessar o Jupyter no endereço http://localhost:8888/?token={TOKEN}
O {TOKEN} é gerando dinamicamente pelo Jupyter sempre que você subir o container, ele é exibido no terminal onde foi dado o comando acima.

Os dados salvos na base Mongo não são deletados quando o container é derrubado, eles ficam salvos na pasta "volumes/" (não versionada) e serão lidos pelo Mongo da próxima vez que o container subir.

## Migração de dados

Caso seja necessário, você pode utilizar os comando abaixo para exportar e importar dados.


### Exportação de dados

```shell

docker exec inf325-trabalho_mongo_1 sh -c 'exec mongodump -d marketplace_engcomp_unicamp --archive' > marketplace_engcomp_unicamp.archive

```

### Importação de dados

```shell

docker exec inf325-trabalho_mongo_1 sh -c 'exec mongorestore -d marketplace_engcomp_unicamp --archive=/data/db/marketplace_engcomp_unicamp.archive'

```
