package models

type Transaction struct {
	ID      int         `json:"id"`
	UserID  int         `json:"-"`
	User    UserProfile `json:"user"`
	Name    string      `json:"name" gorm:"type: varchar(255)""`
	Address string      `json:"address" gorm:"type: varchar(255)"`
	Phone   string      `json:"phone" gorm:"type: varchar(255)"`
	Status  string      `json:"status" gorm:"type: varchar(255)"`
	Cart    []Cart      `json:"cart"`
}