package database

import (
	"backEnd/models"
	"backEnd/pkg/mysql"
	"fmt"
)

func RunMigration() {
	err := mysql.ConnDB.AutoMigrate(
		&models.Product{},
		&models.User{},
		&models.Cart{},
		&models.Transaction{},
	)

	if err != nil {
		fmt.Println(err)
		panic("migration error")
	}
	fmt.Println("migration success")
}