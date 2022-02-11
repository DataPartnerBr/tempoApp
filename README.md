#Tempo Telecom App - Challenge


# Instalação

`git clone https://github.com/DataPartnerBr/tempoApp.git`

**Nota: use o de sua preferência Yarn ou Npm **

Instalar as dependências com o comando:

`$yarn` ou `$npm install`

### Modificar a constante api com a ip que esta rodando na API

```
const api = create({
        baseURL: 'http://192.168.1.92:3349',
        headers: {Accept: 'application/json'},
    })
```

### Rodar o app via EXPO
```
expo start
```