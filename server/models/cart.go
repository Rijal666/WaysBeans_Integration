package models

type Cart struct {
	ID            int         `json:"id"`
	UserID        int         `json:"user_id"`
	User          UserProfile `json:"-" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	ProductID     int         `json:"product_id"`
	Product       Product     `json:"product" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Quantity      int         `json:"quantity" gorm:"type: int"`
	TransactionID int         `json:"transaction_id" gorm:"type: int"`
	Transaction   Transaction `json:"-"`
}