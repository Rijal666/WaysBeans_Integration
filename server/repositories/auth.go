package repositories

import (
	"backEnd/models"

	"gorm.io/gorm"
)

type AuthRepository interface {
	Register(user models.User)(models.User, error)
	Login(email string)(models.User, error)
	GetActiveUser(ID int) (models.User, error)
	UpdateActiveUser(user models.User) (models.User, error)
}

func RepositoryAuth(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Register(user models.User)(models.User, error){
	err := r.db.Create(&user).Error

	return user, err
}

func (r *repository) Login(email string)(models.User, error){
	var user models.User
	err := r.db.First(&user, "email=?", email).Error

	return user, err
}

func (r *repository) GetActiveUser(ID int) (models.User, error) {
	var user models.User
	err := r.db.Preload("Transaction").Preload("Transaction.User").Preload("Transaction.Cart").Preload("Transaction.Cart.Product").Where("id = ?", ID).First(&user, ID).Error 

	return user, err
}

func (r *repository) UpdateActiveUser(user models.User) (models.User, error) {
	err := r.db.Save(&user).Error

	return user, err
}