import Hapi,{Server} from "hapi";


const server = new Server();

server.connection({
  port: 3000,
  host: 'localhost'
});


server.start((err) => {
  if(err) throw err;
  else console.log(`Server Running at: ${server.info.uri}`);


  let someAsyncStuff = async() => {
    return 3;
  };

  let getAsyncStuff = async() => {
    let x = await someAsyncStuff();
    let y = await someAsyncStuff();

    let z = await Promise.all([someAsyncStuff(), someAsyncStuff()]);

    console.log(z);

  };

  getAsyncStuff();


});
