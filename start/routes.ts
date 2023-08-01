
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.on("/news").render("news.view");

Route.post("/news", () => {
  return response.redirect( "/news.view");
})
