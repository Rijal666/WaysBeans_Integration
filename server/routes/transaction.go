package routes

import (
	"backEnd/handlers"
	"backEnd/pkg/middleware"
	"backEnd/pkg/mysql"
	"backEnd/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	TransactionRepository := repositories.RepositoryTransaction(mysql.ConnDB)
	h := handlers.HandlerTransaction(TransactionRepository)

	e.GET("/transactions", middleware.Auth(h.FindTransactions))
	e.GET("/transactions/:id", middleware.Auth(h.GetTransaction))
	e.GET("/transactions-user", middleware.Auth(h.GetUserTrans))
	e.PATCH("/transactions", middleware.Auth(h.DoTransaction))
	e.PATCH("/transactions/:id", (middleware.Auth(h.UpdateTransaction)))
	e.DELETE("/transactions/:id", middleware.Auth(h.DeleteTransaction))
}