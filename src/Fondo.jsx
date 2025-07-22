
import './App.css'
  
function checkearPaginaActiva(){
    let aux = true;
    if (!document.hidden){
        aux = false;
    }

    return aux;

} 



function Numeros(){
    
    function generateNumbers(){

    let numbers = ['1','2','3','4','5','6','7','8', '9', '0'];
    
    
    while (checkearPaginaActiva()){

        numbers.sort((a,b) => {


            return ((a*Math.random())*100 - (b*Math.random())*100);


        });


         for(let elem of numbers){

        let p = document.createElement('p');
        let t = document.createTextNode(numbers[elem]);

        p.appendChild(t);
        
        }     


    }

       

    }

    return (


        <p></p>



    )
  

}

function Fondo(){


         
  return (

    <>


      <div id='background' className="fixed">    

            <Numeros></Numeros>    
        
        </div>
    </>
  
  
  
  )




}

 




export default Fondo