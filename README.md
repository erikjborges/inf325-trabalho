# inf325-trabalho
Repositório para desenvolvimendo do trabalho final da disciplina de INF325 do curso de especialização em Engenharia de Software da Unicamp.

<!-- [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/erikjborges/inf325-trabalho/master) -->

## Organização dos arquivos

 - docker-compose.yml: Arquivo de configuração do Docker Compose para subir os containeres do projeto;
 - jupyter-work/: Pasta contendo os notebooks do Jupyter utilizados no desenvolvimento do projeto e para testes;
 - LICENSE: Arquivo de licença do projeto;
 - queries/: Pasta contendo as buscas no banco de dados Mongo desenvolvidas para esse projeto, em formato Mongo Shell.


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
