// AdminDashboard.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // URL của ảnh sản phẩm
  categoryId: number;
  quantity: number;
}

interface Order {
  id: number;
  customerName: string;
  total: number;
  status: string;
  items: { productName: string; quantity: number }[];
}

interface User {
  id: number;
  name: string;
  email: string;
}

const AdminDashboard = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    categoryId: 0,
    quantity: 0,
  });

  // Giả lập tải dữ liệu từ API
  useEffect(() => {
    const fetchedCategories = [
      { id: 1, name: "Chó" },
      { id: 2, name: "Mèo" },
    ];
    const fetchedProducts = [
      {
        id: 1,
        name: "Thức ăn cho chó",
        price: 50000,
        description: "Thức ăn dinh dưỡng cho chó",
        image: "/images/dog-food.jpg",
        categoryId: 1,
        quantity: 10,
      },
      {
        id: 2,
        name: "Đồ chơi cho chó",
        price: 30000,
        description: "Đồ chơi vui nhộn cho chó",
        image: "/images/dog-toy.jpg",
        categoryId: 1,
        quantity: 5,
      },
      {
        id: 3,
        name: "Thức ăn cho mèo",
        price: 40000,
        description: "Thức ăn dinh dưỡng cho mèo",
        image: "/images/cat-food.jpg",
        categoryId: 2,
        quantity: 8,
      },
    ];
    const fetchedOrders = [
      {
        id: 1,
        customerName: "Nguyễn Văn A",
        total: 150000,
        status: "Chưa xác nhận",
        items: [
          { productName: "Thức ăn cho chó", quantity: 2 },
          { productName: "Đồ chơi cho chó", quantity: 1 },
        ],
      },
      {
        id: 2,
        customerName: "Trần Thị B",
        total: 200000,
        status: "Đang vận chuyển",
        items: [{ productName: "Thức ăn cho mèo", quantity: 4 }],
      },
    ];
    const fetchedUsers = [
      { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@example.com" },
      { id: 2, name: "Trần Thị B", email: "tranthib@example.com" },
    ];

    setCategories(fetchedCategories);
    setProducts(fetchedProducts);
    setOrders(fetchedOrders);
    setUsers(fetchedUsers);
  }, []);

  const addProduct = () => {
    if (
      newProduct.name.trim() === "" ||
      newProduct.price <= 0 ||
      newProduct.categoryId === 0 ||
      newProduct.image.trim() === "" ||
      newProduct.description.trim() === "" ||
      newProduct.quantity <= 0
    )
      return;

    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: "", price: 0, description: "", image: "", categoryId: 0, quantity: 0 });
  };

  const deleteProduct = (productId: number) => {
    setProducts(products.filter((prod) => prod.id !== productId));
  };

  const updateProduct = () => {
    if (!editingProduct) return;
    setProducts(
      products.map((prod) =>
        prod.id === editingProduct.id ? { ...editingProduct } : prod
      )
    );
    setEditingProduct(null);
  };

  const updateOrderStatus = (orderId: number, newStatus: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pet-teal mb-4">Admin Dashboard</h1>
      <Tabs defaultValue="orders">
        <TabsList className="mb-4">
          <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
          <TabsTrigger value="products">Sản phẩm</TabsTrigger>
          <TabsTrigger value="users">Tài khoản người dùng</TabsTrigger>
        </TabsList>

        {/* Orders tab */}
        <TabsContent value="orders">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Quản lý Đơn hàng</h2>
              <ul className="space-y-2">
                {orders.map((order) => (
                  <li key={order.id} className="border p-3 rounded">
                    <p><strong>Khách hàng:</strong> {order.customerName}</p>
                    <p><strong>Tổng tiền:</strong> {order.total} VND</p>
                    <p><strong>Trạng thái:</strong> {order.status}</p>
                    <p><strong>Chi tiết đơn hàng:</strong></p>
                    <ul className="ml-4 list-disc">
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.productName} - Số lượng: {item.quantity}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex gap-2">
                      {order.status !== "Chưa xác nhận" && (
                        <Button
                          variant="outline"
                          onClick={() => updateOrderStatus(order.id, "Chưa xác nhận")}
                        >
                          Chưa xác nhận
                        </Button>
                      )}
                      {order.status !== "Đang vận chuyển" && (
                        <Button
                          variant="outline"
                          onClick={() => updateOrderStatus(order.id, "Đang vận chuyển")}
                        >
                          Đang vận chuyển
                        </Button>
                      )}
                      {order.status !== "Hoàn tất" && (
                        <Button
                          variant="outline"
                          onClick={() => updateOrderStatus(order.id, "Hoàn tất")}
                        >
                          Hoàn tất
                        </Button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Products tab */}
        <TabsContent value="products">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Quản lý Sản phẩm</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Tên sản phẩm"
                  value={editingProduct ? editingProduct.name : newProduct.name}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({ ...editingProduct, name: e.target.value })
                      : setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Giá"
                  value={editingProduct ? editingProduct.price : newProduct.price}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          price: parseFloat(e.target.value),
                        })
                      : setNewProduct({
                          ...newProduct,
                          price: parseFloat(e.target.value),
                        })
                  }
                />
                <Input
                  placeholder="Mô tả sản phẩm"
                  value={editingProduct ? editingProduct.description : newProduct.description}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({ ...editingProduct, description: e.target.value })
                      : setNewProduct({ ...newProduct, description: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Số lượng"
                  value={editingProduct ? editingProduct.quantity : newProduct.quantity}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          quantity: parseInt(e.target.value),
                        })
                      : setNewProduct({
                          ...newProduct,
                          quantity: parseInt(e.target.value),
                        })
                  }
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (editingProduct) {
                          setEditingProduct({ ...editingProduct, image: reader.result as string });
                        } else {
                          setNewProduct({ ...newProduct, image: reader.result as string });
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                />
                <select
                  value={editingProduct ? editingProduct.categoryId : newProduct.categoryId}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          categoryId: parseInt(e.target.value),
                        })
                      : setNewProduct({
                          ...newProduct,
                          categoryId: parseInt(e.target.value),
                        })
                  }
                  className="border rounded p-2"
                >
                  <option value={0}>Chọn danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {editingProduct ? (
                  <Button onClick={updateProduct} className="bg-pet-teal hover:bg-pet-teal/80">
                    Cập nhật sản phẩm
                  </Button>
                ) : (
                  <Button onClick={addProduct} className="bg-pet-teal hover:bg-pet-teal/80">
                    Thêm sản phẩm
                  </Button>
                )}
              </div>
              <ul className="space-y-4">
                {products.map((prod) => (
                  <li key={prod.id} className="border p-4 rounded flex gap-4 items-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <p className="font-bold">{prod.name}</p>
                      <p>{prod.description}</p>
                      <p>Giá: {prod.price} VND</p>
                      <p>Số lượng: {prod.quantity}</p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setEditingProduct(prod)}
                      className="mr-2"
                    >
                      Chỉnh sửa
                    </Button>
                    <Button variant="destructive" onClick={() => deleteProduct(prod.id)}>
                      Xóa
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users tab */}
        <TabsContent value="users">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Quản lý Tài khoản Người dùng</h2>
              <ul className="space-y-2">
                {users.map((user) => (
                  <li key={user.id} className="border p-3 rounded">
                    <p><strong>Tên:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <Button variant="destructive" className="mt-2">
                      Xóa tài khoản
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
