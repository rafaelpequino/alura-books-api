# Utilização do Express

### Trata-se de um framework que cria o servidor e fornece as ferramentas necessárias para aplicações backend

npm init -> inicia o projeto

npm install express -> instala a biblioteca express

node app.js -> inicia o servidor

npm install nodemon -> biblioteca para hot reload

nodemon app.js -> inicia o servidor com o nodemon


---

## CORS

npm install cors -> Instala biblioteca CORS, para permitir o acesso a API

app.use(cors({origin: "*"})) -> permite acesso liberado para qualquer url

---

## Rotas

#### Ligação entre um método HTTP, uma URL e uma função