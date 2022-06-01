const button=()=> {
  const burger = documet.querySelecotor('.burger');
  burger.addEventListener('click', ()=> {
    burger.classList.toggle('toggle');
  });
}

button();
