# Usar uma imagem base com Node.js
FROM node:16-alpine AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos package.json e package-lock.json para instalar dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código do projeto
COPY . .

# Construir a aplicação
RUN npm run build

# Servir a aplicação com uma imagem Nginx
FROM nginx:alpine

# Copiar os arquivos construídos do estágio de build para o diretório de arquivos estáticos do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 para acessar o Nginx
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]