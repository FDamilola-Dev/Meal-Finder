const fetchMeal = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );
    if (!response.ok) {
      throw new Error("Nectwork is bad");
    }
    const data = await response.json();
    console.log(data.meals);
    const meals = data.meals;
      function limitWords(text,wordLimit) {
return text.split(' ').slice(0,wordLimit).join(' ') + '...';
}

    const mealcardContainer = document.getElementById("mealcard-container");
    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.className = "meal-card";
      div.innerHTML = `<div><img src="${meal.strMealThumb}" alt= "meal"/></div>
    <h2> ${meal.strMeal}</h2>
    <p>${meal.strInstructions.substring(0, 150)}</p>
    <ul>
<li>${meal.strIngredient1} - ${meal.strMeasure1}</li>
<li>${meal.strIngredient2} - ${meal.strMeasure2}</li>
<li>${meal.strIngredient3} - ${meal.strMeasure3}</li>
<li>${meal.strIngredient4}- ${meal.strMeasure4}</li>
<li>${meal.strIngredient5} - ${meal.strMeasure5}</li>
</ul>
<a href = "${meal.strYoutube}">Watch Video </a>
    

`;
      mealcardContainer.appendChild(div);
    });
  } catch (error) {
    container.innerHTML = "<p>Could not load meals. Check your internet.</p>";
  }
};
fetchMeal();
