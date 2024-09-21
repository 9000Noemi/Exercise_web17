
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        let usuario;
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
            }
            resolve(usuario)
        }, 2000);
    });
   
};


const main = async () => {
    try {
      const result = await obtenerUsuario(1);
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  };
  
  main();
