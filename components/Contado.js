const Contado = () => {


    const  [contador , setContador] = React.useState(0);
    console.log(contador);

    const aumentar = () => 
        setContador(contador + 1)
    


    const disminuir = () => 
        setContador(contador - 1)
    


    return (
        <div>

       
         <h1 className={contador < 0 ? "menor": "mayor"} >Contador: {contador } </h1> 
        
         <buttom 
          onClick={aumentar} >
             Aumentar
         </buttom>

         <buttom onClick={disminuir} >
             Disminuir
         </buttom>
         </div>
         ) ;

};