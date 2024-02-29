const hero = document.querySelector(".hero");
const input = document.querySelector(".search");
const btn = document.querySelector(".btn-14");
const reg = document.querySelector(".region");
const pop = document.querySelector(".pop");

// https://restcountries.com/v3.1/name/{name}
let all = null;
function getApi(API) {
  axios(`https://restcountries.com/v3.1/${API}`).then((res) => {
    console.log(res.data);
    all = res.data;
    dataRender(res.data);
  });
}
getApi("all");

function dataRender(data) {
  window.scroll(0, 0);
  hero.innerHTML = "";
  data.map((el) => {
    hero.innerHTML += `<div class="box">
  <img src="${el.flags.png}" alt="">
  <h1>${el.name.common}</h1>
  <h2>${el.region}</h2>
  <h4>KB ${el.area}<sup>2</sup></h4>
  <h4>население ${el.population}</h4>
  </div>`;
  });
}
btn.addEventListener("click", () => {
  getApi(`name/${input.value}`);
});

input.addEventListener("input", (e) => {
  getApi(`name/${e.target.value}`);
});

reg.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "africa") {
    const res = all.filter((el) => el.region === "Africa");
    dataRender(res);
  }
});
reg.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "asia") {
    const res = all.filter((el) => el.region === "Asia");
    dataRender(res);
  }
});
reg.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "americas") {
    const res = all.filter((el) => el.region === "Americas");
    dataRender(res);
  }
});
reg.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "europe") {
    const res = all.filter((el) => el.region === "Europe");
    dataRender(res);
  }
});

pop.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "population") {
    const res = all.sort((a, b) => b.population - a.population);
    dataRender(res);
  }
  if (target === "area") {
    const res = all.sort((a, b) => b.area - a.area);
    dataRender(res);
  }
  if (target === "area") {
    const res = all.sort((a, b) => b.area - a.area);
    dataRender(res);
  }

  if (target === "a-z") {
    const res = all.sort((a, b) => (b.name.common < a.name.common ? 1 : -1));
    dataRender(res);
  }
  if (target === "z-a") {
    const res = all.sort((a, b) => (a.name.common < b.name.common ? 1 : -1));
    dataRender(res);
  }
});

