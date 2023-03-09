package dto

type CartRequest struct {
	UserID    int `json:"user_id"`
	ProductID int `json:"product_id"`
	Quantity  int `json:"quantity"`
}

// type UpdateCartRequest struct {
// 	Quantity int `json:"quantity"`
// }

type CartResponse struct {
	UserID    int `json:"user_id"`
	ProductID int `json:"product_id"`
	Quantity  int `json:"quantity"`
}