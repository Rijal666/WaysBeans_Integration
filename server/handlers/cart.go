package handlers

import (
	"backEnd/dto"
	"backEnd/dto/result"
	"backEnd/models"
	"backEnd/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type CartHandler struct {
	CartRepository repositories.CartRepository
	ProductRepository repositories.ProductRepository
}

func HandlerCart(CartRepository repositories.CartRepository, ProductRepopsitory repositories.ProductRepository) *CartHandler {
	return &CartHandler{
		CartRepository: CartRepository,
		ProductRepository: ProductRepopsitory,
	}

}

func (h *CartHandler) CreateCart(c echo.Context) error{
	request := new(dto.CartRequest)
	if err := c.Bind(request); err != nil{
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}
	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}
	userLogin := c.Get("userLogin")
	userId := int(userLogin.(jwt.MapClaims)["id"].(float64))
	
	transaction, err := h.CartRepository.GetActiveTrans(userId)
	if err != nil {
		// If there is no active transaction, create a new one
		newTransaction := models.Transaction{
			UserID: userId,
			Status: "active",
		}
		transaction, err = h.CartRepository.CreateTransactionCart(newTransaction)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, result.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
		}
	}

	activeProduct, err :=h.CartRepository.GetActiveProduct(userId, transaction.ID, request.ProductID)
	if err != nil{
		
		cart := models.Cart{
			UserID: request.UserID,
			ProductID: request.ProductID,
			Quantity: request.Quantity,
			TransactionID: transaction.ID,

	}

	data, err := h.CartRepository.CreateCart(cart)
	if err != nil{
		return c.JSON(http.StatusInternalServerError, result.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()}) 
	}
	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: convCart(data)})
	}

	if request.Quantity != 0{
		activeProduct.Quantity = request.Quantity + activeProduct.Quantity
	}

	data, err := h.CartRepository.UpdateCart(activeProduct, activeProduct.ID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, result.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: convCart(data)})
}

func (h *CartHandler) FindCarts(c echo.Context) error {
	cart, err := h.CartRepository.FindCart()
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: cart})
}

func (h *CartHandler) GetCart(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	cart, err := h.CartRepository.GetCart(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: cart})
}

func (h *CartHandler) UpdateCart(c echo.Context) error {
	request := new(dto.CartRequest)
	if err := c.Bind(&request); err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	id, _ := strconv.Atoi(c.Param("id"))

	cart, err := h.CartRepository.GetCart(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	if request.Quantity != 0{
		cart.Quantity = request.Quantity
	}

	data, err := h.CartRepository.UpdateCart(cart,id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, result.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: convCart(data)})
}

func (h *CartHandler) DeleteCart(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	cart, err := h.CartRepository.GetCart(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.CartRepository.DeleteCart(cart, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, result.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: convCart(data)})
}

func (h *CartHandler) GetActiveCart(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)

	trans, err := h.CartRepository.GetActiveTrans(int(userId))
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	cart, err := h.CartRepository.GetActiveCart(int(trans.ID))
	if err != nil {
		return c.JSON(http.StatusBadRequest, result.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, result.SuccessResult{Status: http.StatusOK, Data: cart})
}

func convCart(u models.Cart) dto.CartResponse{
	return dto.CartResponse{
		UserID: u.UserID,
		ProductID: u.Product.ID,
		Quantity: u.Quantity,

	}
}