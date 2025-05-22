const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//se modifico los queryselectos porque uno no tenia un . y el otro tenia un #
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
//se agrego un parrafo con la clase location 
const $l = document.querySelector('.location');

//el codigo tenia una idea de querer usar async function ya que tenia un try catch
async function displayUser(username) {
  //Si se tarda en cargar la api aparecen los textos cargando
  $n.textContent  = "cargando...";
  $n.textContent = "cargando...";
  $n.textContent = "cargando...";
  const options = {"method":"GET"}
  //se modifico la funcion para que funcionara como async function 
  try{
    const response = await fetch(`${usersEndpoint}/${username}`, options);
    const res = await response.json();
    //cambios en el como se les daba un valor a las variables ya que antes estaban `{data.name}`
    $n.textContent = res.name;
    $b.textContent = res.blog;
    $l.textContent = res.location;
  }catch (err){
    //si marca un error se manda a llamar la funcion handelerror
    handleError(err)
  }//try
}//displayuser

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}//handleError

displayUser('stolinski').catch(handleError);