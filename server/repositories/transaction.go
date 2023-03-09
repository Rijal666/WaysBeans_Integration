package repositories

import (
	"backEnd/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	FindTransaction() ([]models.Transaction, error)
	GetTransaction(ID int) (models.Transaction, error)
	CreateTransaction(user models.Transaction) (models.Transaction, error)
	UpdateTransaction(user models.Transaction, ID int) (models.Transaction, error)
	DeleteTransaction(user models.Transaction, ID int) (models.Transaction, error)
	GetUserTrans(UserID int) ([]models.Transaction, error)
	GetActiveTransaction(UserID int) (models.Transaction, error)
	DoTransaction(transaction models.Transaction, ID int) (models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindTransaction() ([]models.Transaction, error) {
	var transactions []models.Transaction
	err := r.db.Raw("SELECT * FROM transactions").Scan(&transactions).Error
	return transactions, err
}

func (r *repository) GetTransaction(ID int) (models.Transaction, error) {
	var transaction models.Transaction
	err := r.db.Raw("SELECT * FROM transactions WHERE id = ?", ID).Scan(&transaction).Error
	return transaction, err
}

func (r *repository) CreateTransaction(transaction models.Transaction)(models.Transaction,error){
	err := r.db.Create(&transaction).Error
	return transaction,err
}

func (r *repository) UpdateTransaction(transaction models.Transaction, ID int)(models.Transaction,error) {
	err := r.db.Save(&transaction).Error
	return transaction,err
}
func (r *repository) DeleteTransaction(transaction models.Transaction, ID int)(models.Transaction,error) {
	err := r.db.Delete(&transaction).Error
	return transaction,err
}

func (r *repository) GetUserTrans(UserID int) ([]models.Transaction, error) {
	var transaction []models.Transaction
	err := r.db.Preload("User").Preload("Cart").Preload("Cart.Product").Where("user_id = ?", UserID).Order("id desc").Find(&transaction).Error
	return transaction, err
}

func (r *repository) GetActiveTransaction(UserID int) (models.Transaction, error) {
	var transaction models.Transaction
	err := r.db.Preload("User").Preload("Cart").Preload("Cart.Product").Where("user_id = ? AND status = ?", UserID, "active").First(&transaction).Error
	return transaction, err
}

func (r *repository) DoTransaction(transaction models.Transaction, ID int) (models.Transaction, error) {
	err := r.db.Save(&transaction).Error
	return transaction, err
}