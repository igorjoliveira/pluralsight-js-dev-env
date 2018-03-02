# pluralsight-js-dev-env
Building a javascript development environment 

/*executar o app com as configurações de desenvolvimento*/
npm start  

/*gerar pacote e executar o app com as configurações de produçao*/
/*por padrão o script prebuild será executado primeiro que o script build*/
/*por padrão o script postbuild será executado após o script build*/
npm run build

/*executar deploy do pacote gerado no script build*/
npm run deploy

/*localtunnel expõe na web o seu app localhost */
npm run share

/*usado para verificar a vulnerabilidade dos pacotes usados no app*/
npm run security-check

/*usado para verificar os padrões de desenvolvimento*/
npm run lint

/*usado para rodar a verificação sempre que um arquivo for salvo*/
npm run lint:watch

/*executar todos os testes do app*/
npm run test 

/*usado para rodar os testes sempre que um arquivo for alterado*/
npm run test:watch

/*gerar um arquivo json estático baseado em um esquema definido*/
npm run generate-mock-data 

/*subir uma API simulada usando o arquivo JSON estático gerado no script acima*/
/*por padrão o script prestart-mockapi será executado primeiro*/
npm run start-mockapi




