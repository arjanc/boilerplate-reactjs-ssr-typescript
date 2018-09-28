#Celar.nl project
Dit project is gebouwd om te kunnen draaien om een Raspberry Pi.
Ook wordt er gebruik gemaakt van Server Side Rendering (SSR) zodat content snel zichtbaar is en er een betere SEO oplossing is.

# Technieken
* ReactJS
* TypeScript
* Redux
* GraphQL
* NodeJS
* ExpressJS
* Webpack

# Runnen
### Initializeren
Als je voor de eerste keer dit project opstart installeer dan de npm packages die nodig zijn.
```
$ npm install
```
### Starten localhost
Dit build de client code en start een express nodejs server op. Nadat alles is opgestart ga je met je browser naar [http://localhost:5001](http://localhost:5001)
```
$ cd src/server
$ npm run dev
```

#Structuur
De client code wordt gebundeld en in de ```public``` folder geplaatst.
De server code wordt ook gebundeld en in de ```build``` map gezet en zodra deze ```bundle.js``` wordt aangepast start de nodeJS server opnieuw op.