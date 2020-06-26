# Donwload-Mangas

Projeto pessoal desenvolvido para fazer download de imagens de mangas em sites gratuitos.

## Inciando

### Pre-requisitos

O que você precisa para iniciar o projeto

```
Node
```

### Instalando

```
=> Baixar o projeto com 'git clone'.
=> Abrir terminal na pasta do projeto
=> Executar o comando 'npm install'.
```

### Escolhendo manga
```
=> Abra o arquivo data.json
=> Edite os seguintes campos:
    --url: link do capitulo para download.
    --name: Mome do manga.
    --chapterMin: Numero do capitulo selecionado
    --chapterMax: Quantidade de capitulos a ser baixado
    --type: Dominio onde o manga está hospedado.
```
**ATENÇÃO: SÓ É POSSIVEL FAZER DOWNLOAD DO SITE MANGASEEONLINE POR ENQUANTO**

### Iniciando o download.
Execute o comando a seguir dentro da pasta do projeto.

```
npm start
```


### Exemplo
O seguinte arquivo data.json vai gerar o download dos capitulos 7 até 17 do manga The Gamer.
```
{
  "url": "https://mangaseeonline.us/read-online/The-Gamer-chapter-7-index-2-page-1.html",
  "name": "The Gamer",
  "chapterMin": 7,
  "chapterMax": 10,
  "type": "MangaSee"
}
```


## Criado com
* [puppeteer](https://github.com/puppeteer/puppeteer) - API de alto nível para controlar o Chrome ou o Chromium por meio do protocolo DevTools
* [image-downloader](https://gitlab.com/demsking/image-downloader) - Download de imagens.