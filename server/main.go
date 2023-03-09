package main

import (
	"backEnd/database"
	"backEnd/pkg/mysql"
	"backEnd/routes"
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins : []string{"*"},
		AllowMethods : []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
		AllowHeaders : []string{"X-Requested-With", "Content-Type", "Authorization"},
	}))

	mysql.DataBaseInit()
	database.RunMigration()

	routes.Routes(e.Group("api/v1"))

	port := "5000"
	fmt.Println("server running on port", port)
	e.Logger.Fatal(e.Start("localhost:" + port))
}