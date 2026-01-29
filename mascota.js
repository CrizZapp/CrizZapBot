// mascota.js
export let mascota = {
  nombre: null,
  hambre: 100,
  energia: 100,
  imagen: 'https://i.postimg.cc/wTkPCNtt/1764291026183.png',
};

export function adoptar(nombre, urlImagen) {
  mascota.nombre = nombre;
  mascota.hambre = 100;
  mascota.energia = 100;
  mascota.imagen = urlImagen || 'https://i.postimg.cc/Z5HSxgFz/1764291031798.png';
  return `¡Has adoptado a ${mascota.nombre}! 🐶`;
}

export function alimentar() {
  mascota.hambre = Math.min(mascota.hambre + 20, 100);
  mascota.imagen = 'https://i.postimg.cc/qRYyF1r8/1764663650932.png';
  return `Has alimentado a ${mascota.nombre}. 🍖 Hambre: ${mascota.hambre}`;
}

export function jugar() {
  if (mascota.energia < 20) return `${mascota.nombre} está muy cansado para jugar. 😴`;
  mascota.energia -= 20;
  mascota.hambre -= 10;
  mascota.imagen = 'https://i.postimg.cc/zXfY7pB6/1764663696278.png';
  return `Has jugado con ${mascota.nombre}. 🎾 Energía: ${mascota.energia}`;
}

export function dormir() {
  mascota.energia = Math.min(mascota.energia + 40, 100);
  mascota.imagen = 'https://i.postimg.cc/yNsPhp6y/1764663707381.png';
  return `${mascota.nombre} está durmiendo 😴 Energía: ${mascota.energia}`;
}

export function verMascota() {
  return {
    text: `Nombre: ${mascota.nombre}\nHambre: ${mascota.hambre}\nEnergía: ${mascota.energia}`,
    image: mascota.imagen
  };
}