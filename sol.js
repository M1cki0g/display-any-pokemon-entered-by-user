async function displayit(callback) {
  try {
    let imgs = document.getElementById("pokemon");
    let name = document.getElementById("pika").value.toLowerCase();

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    let pic = data.sprites.front_default;
    console.log(data.name);
    imgs.src = pic;
    imgs.style.display = "block";
  } catch (error) {
    callback(error);
  }
}
function err(err) {
  console.error(err);
}
