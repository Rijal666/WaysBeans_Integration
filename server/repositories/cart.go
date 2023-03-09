package repositories

import (
	"backEnd/models"

	"gorm.io/gorm"
)

type CartRepository interface {
	FindCart() ([]models.Cart, error)
	CreateCart(cart models.Cart)(models.Cart, error)
	GetCart(ID int) (models.Cart,error)
	GetActiveProduct(UserID int,TransID int, ProductID int) (models.Cart,error)
	GetActiveTrans(UserID int) (models.Transaction, error)
	CreateTransactionCart(transaction models.Transaction) (models.Transaction, error)
	GetActiveCart(TransID int) ([]models.Cart, error)
	UpdateCart(cart models.Cart, ID int) (models.Cart,error)
	DeleteCart(cart models.Cart, ID int) (models.Cart,error)

}

func RepositoryCart(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateCart(cart models.Cart)(models.Cart, error) {
	err := r.db.Create(&cart).Error
	return cart, err
}

func (r *repository) FindCart()([]models.Cart,error){
	var carts []models.Cart
	err := r.db.Raw("SELECT * FROM cart").Scan(&carts).Error
	return carts, err
}

func (r *repository) GetCart(ID int)(models.Cart,error) {
	var cart models.Cart
	err := r.db.Raw("SELECT * FROM carts WHERE id = ?", ID).Scan(&cart).Error
	return cart,err
}
func (r *repository) UpdateCart(cart models.Cart, ID int)(models.Cart,error) {
	err := r.db.Save(&cart).Error
	return cart,err
}
func (r *repository) DeleteCart(cart models.Cart, ID int)(models.Cart,error) {
	err := r.db.Delete(&cart).Error
	return cart,err
}
func (r *repository) GetActiveProduct(UserID int, TransactionID int, ProductID int)(models.Cart,error) {
	var cart models.Cart
	err := r.db.Preload("User").Preload("Product").Where("user_id = ? AND transaction_id = ? AND product_id = ?", UserID, TransactionID, ProductID).First(&cart).Error
	return cart, err
}

func (r *repository) GetActiveTrans(UserID int) (models.Transaction, error) {
	var transaction models.Transaction
	err := r.db.Preload("User").Preload("Cart").Preload("Cart.Product").Where("user_id = ? AND status = ?", UserID, "active").First(&transaction).Error
	return transaction, err
}

func (r *repository) CreateTransactionCart(transaction models.Transaction) (models.Transaction, error) {
	err := r.db.Create(&transaction).Error
	return transaction, err
}

func (r *repository) GetActiveCart(TransID int) ([]models.Cart, error) {
	var carts []models.Cart
	err := r.db.Preload("User").Preload("Product").Find(&carts, "transaction_id = ?", TransID).Error

	return carts, err
}