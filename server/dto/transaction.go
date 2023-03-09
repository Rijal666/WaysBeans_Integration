package dto

type CreateTransactionRequest struct {
	UserID  int    `json:"user_id"`
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Status  string `json:"status"`
}

type UpdateTransactionRequest struct {
	Status string `json:"status"`
}

type TransactionResponse struct {
	ID      int    `json:"id"`
	UserID  int    `json:"user_id"`
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Status  string `json:"status"`
}
