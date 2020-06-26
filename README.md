# Donwload-Mangas

Projeto pessoal deselvolvido para fazer download de imagens de mangas em sites gratuidos.

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
    --name: Nome do manga.
    --chapterMin: Numero do capitulo selecionado
    --chapterMax: Quantidade de capitulos a ser baixado
    --type: Dominio onde o manga está hospedado.
```
### Iniciando o download.
Execute o comando a seguir dentro da pasta do projeto.

```
npm start
```

**ATENÇÃO: SÓ É POSSIVEL FAZER DOWNLOAD DO SITE MANGASEEONLINE POR ENQUANTO**

### Exemplo
O seguinte arquivo data.json vai gerar o download manga The Gamer Capitulo 7 até o capitulo 17.
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
Principais:
* [puppeteer](https://github.com/puppeteer/puppeteer) - API de alto nível para controlar o Chrome ou o Chromium por meio do protocolo DevTools
* [image-downloader](https://gitlab.com/demsking/image-downloader) - Download de imagens.