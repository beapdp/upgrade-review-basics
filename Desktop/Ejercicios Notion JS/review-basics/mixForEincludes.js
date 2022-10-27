const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categoriesMovies = [];

for (const movie of movies) {
    for (const categorie of movie.categories) {
        if (!categoriesMovies.includes(categorie)) {
            categoriesMovies.push(categorie);
        }
    }
}
console.log(categoriesMovies);