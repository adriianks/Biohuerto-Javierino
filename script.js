function mostrarSeccion(id) {
  document.getElementById('plantas').classList.add('hidden');
  document.getElementById('mapa').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');

  const header = document.querySelector('header');
  if (id === 'mapa') {
    header.classList.add('mapa-activo');
  } else {
    header.classList.remove('mapa-activo');
  }
}

function mostrarZona(numero) {
  const info = document.getElementById('info-zona');
  let contenido = '';

  switch (numero) {
    case 1:
      contenido = `<h3>Zona A</h3><p>Plantas: Lechuga, Espinaca, Acelga, Albahaca (climas frescos, sombra parcial, riego frecuente).</p>`;
      break;
    case 2:
      contenido = `<h3>Zona B</h3><p>Plantas: Zanahoria, Pepino, Tomate, Pimiento (sol directo, clima cálido, riego moderado).</p>`;
      break;
    case 3:
      contenido = `<h3>Zona C</h3><p>Plantas: Rabanito y otras de crecimiento rápido o estacional. Ideal para rotación de cultivos.</p>`;
      break;
    default:
      contenido = `<p>Haz clic en una zona para ver las plantas agrupadas.</p>`;
  }

  info.innerHTML = contenido;
}
