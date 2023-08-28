const getCatFact = async () => {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return data.fact;
  } catch (err) {
    console.log(err);
  }
};

getCatFact().then((data) => {
  console.log(data);
});
