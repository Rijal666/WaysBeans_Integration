package routes

import (
	"backEnd/handlers"
	"backEnd/pkg/middleware"
	"backEnd/pkg/mysql"
	"backEnd/repositories"

	"github.com/labstack/echo/v4"
)

func CartRoutes(e *echo.Group) {
	cartRepository := repositories.RepositoryCart(mysql.ConnDB)
	ProductRepository := repositories.RepositoryProduct(mysql.ConnDB)
	h := handlers.HandlerCart(cartRepository, ProductRepository)

	e.POST("/cart", middleware.Auth(h.CreateCart))
	e.GET("/cart", middleware.Auth(h.FindCarts))
	e.GET("/cart/:id", middleware.Auth(h.GetCart))
	e.PATCH("/cart/:id", middleware.Auth(h.UpdateCart))
	e.DELETE("/cart/:id", middleware.Auth(h.DeleteCart))
	e.GET("/carts-active", middleware.Auth(h.GetActiveCart))

}
