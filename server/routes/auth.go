package routes

import (
	"backEnd/handlers"
	"backEnd/pkg/middleware"
	"backEnd/pkg/mysql"
	"backEnd/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	AuthRepository := repositories.RepositoryAuth(mysql.ConnDB)
	h := handlers.HandlerAuth(AuthRepository)

	e.POST("/register", h.Register)
	e.POST("/login", h.Login)
	e.GET("/profile", middleware.Auth(h.GetActiveUser))
	// e.PATCH("/profile", middleware.Auth(middleware.UploadFile(h.UpdateActiveUser)))	
}