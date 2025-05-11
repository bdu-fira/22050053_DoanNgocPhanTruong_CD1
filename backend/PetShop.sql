CREATE DATABASE PetShop;
USE PetShop;
-- =========================
-- 1. BẢNG DANH MỤC (Category)
-- =========================
CREATE TABLE Category (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL
);

-- =========================
-- 2. BẢNG SẢN PHẨM (Product)
-- =========================
CREATE TABLE Product (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Price DECIMAL(18,2) NOT NULL,
    Description VARCHAR(1000),
    Image VARCHAR(300),
    CategoryId INT NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CategoryId) REFERENCES Category(Id)
);

-- =========================
-- 3. BẢNG NGƯỜI DÙNG (User)
-- =========================
CREATE TABLE User (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    PasswordHash VARCHAR(256) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Role VARCHAR(20) -- 'admin' hoặc 'customer'
);

-- =========================
-- 4. BẢNG GIỎ HÀNG (Cart)
-- =========================
CREATE TABLE Cart (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES User(Id)
);

-- =========================
-- 5. BẢNG SẢN PHẨM TRONG GIỎ (CartItem)
-- =========================
CREATE TABLE CartItem (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    CartId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CartId) REFERENCES Cart(Id),
    FOREIGN KEY (ProductId) REFERENCES Product(Id)
);

-- =========================
-- 6. BẢNG ĐƠN HÀNG (Order)
-- =========================
CREATE TABLE `Order` (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    CustomerName VARCHAR(100) NOT NULL,
    Total DECIMAL(18,2) NOT NULL,
    Status VARCHAR(50) NOT NULL,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES User(Id)
);

-- =========================
-- 7. BẢNG CHI TIẾT ĐƠN HÀNG (OrderItem)
-- =========================
CREATE TABLE OrderItem (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,
    ProductName VARCHAR(200), -- Lưu tên tại thời điểm đặt hàng
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(18,2) NOT NULL,
    FOREIGN KEY (OrderId) REFERENCES `Order`(Id),
    FOREIGN KEY (ProductId) REFERENCES Product(Id)
);

-- =========================
-- 8. DỮ LIỆU MẪU (Sample Data)
-- =========================

-- Danh mục mẫu
INSERT INTO Category (Name) VALUES ('Chó'), ('Mèo');

-- Người dùng mẫu
INSERT INTO User (UserName, PasswordHash, Email, Role)
VALUES 
('admin', 'hash_admin', 'admin@email.com', 'admin'),
('user1', 'hash_user1', 'user1@email.com', 'customer');

-- Sản phẩm mẫu
INSERT INTO Product (Name, Price, Description, Image, CategoryId, Quantity)
VALUES 
('Chó Alaska', 10000000, 'Chó Alaska thuần chủng', 'alaska.jpg', 1, 5),
('Mèo Anh lông ngắn', 5000000, 'Mèo Anh lông ngắn dễ thương', 'meo_anh.jpg', 2, 10);

-- Đơn hàng mẫu
INSERT INTO `Order` (UserId, CustomerName, Total, Status)
VALUES (2, 'Nguyễn Văn A', 10000000, 'Đã thanh toán');

-- Chi tiết đơn hàng mẫu
INSERT INTO OrderItem (OrderId, ProductId, ProductName, Quantity, UnitPrice)
VALUES (1, 1, 'Chó Alaska', 1, 10000000);
