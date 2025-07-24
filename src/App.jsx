import { useState } from 'react'


import './App.css'


function BotonGenerar(){
 
  function generar(){
    
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_-?/.,;:[]{}<>|';
  
  let result = '';

  const charactersLength = characters.length;

  for (let i = 0; i < 20; i++) {

    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    
}

    document.getElementById('generada').value = result;

  
}




  return (
<button id='botonGenerarPsw' onClick={generar}>Generar</button>
);



}


function BotonCopiar() {
  const [copied, setCopied] = useState(false);

  function copiar() {
    const text = document.getElementById('generada')?.value;
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Copied to clipboard!');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => console.error('Failed to copy:', err));
    }
  }

  return (
    <div className="relative inline-block">
      {copied && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-green-500 text-white text-xs px-2 py-1 rounded shadow">
          Copied!
        </div>
      )}

      <button
        id="botonCopiar"
        onClick={copiar}
        className="flex items-center justify-center"
        style={{ width: '50px', height: '50px' }}
      >
        <img src="/clipboard.png" alt="Copy!" className="w-6 h-6" />
      </button>
    </div>
  );
}


function App() {
 

  return (
    <>
        <div id='contenedorWrapper'>

          <div id='wrapper' className='shadow-xl'>
            
            <h1>Password Generator!</h1>
            
          </div>
             
              <div id='wrapped'>
                
                <input type="text" id='generada' className='text-center' disabled/>
                
                <BotonCopiar />
                
                <BotonGenerar />  
              </div>
            
            
         
        
        </div>
      
          
    
    </>
  )
}

export default App
