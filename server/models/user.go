package models

type User struct {
	ID          int           `json:"id"`
	Name        string        `json:"name" gorm:"type: varchar(255)"`
	Email       string        `json:"email" gorm:"type: varchar(255)"`
	Password    string        `json:"-" gorm:"type: varchar(255)"`
	Image       string        `json:"image" gorm:"type: varchar(255)"`
	Transaction []Transaction `json:"transaction"`
}

type UserCart struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Image string `json:"image"`
}

type UserProfile struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Image string `json:"image"`
}

func (UserProfile) TableName() string {
	return "users"
}

func (UserCart) TableName() string {
	return "users"
}