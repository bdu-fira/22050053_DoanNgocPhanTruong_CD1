// AdminLogin.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const adminLoginSchema = z.object({
  email: z.string().email({ message: "Vui lòng nhập email quản trị" }),
  password: z.string().min(6, { message: "Mật khẩu chứa ít nhất 6 ký tự" }),
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof adminLoginSchema>>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof adminLoginSchema>) => {
    setIsLoading(true);
    setError("");

    try {
      // Demo admin account
      if (data.email === "admin@example.com" && data.password === "admin123") {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("admin", JSON.stringify({
          id: "0",
          email: data.email,
          name: "Administrator"
        }));

        toast({
          title: "Đăng nhập Admin thành công!",
          description: "Chào mừng quản trị viên trở lại!",
        });

        navigate("/admin/dashboard");
      } else {
        setError("Tài khoản quản trị không hợp lệ");
      }
    } catch (err) {
      setError("Lỗi hệ thống. Vui lòng thử lại.");
      console.error("Admin login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-pet-teal">Đăng nhập Quản trị viên</h1>

      {error && (
        <Alert className="mb-6 bg-red-50 border-red-200">
          <AlertDescription className="text-red-600">{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email quản trị</FormLabel>
                <FormControl>
                  <Input placeholder="admin@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-pet-teal hover:bg-pet-teal/80"
            disabled={isLoading}
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <Button 
          variant="link" 
          className="p-0 h-auto text-pet-teal"
          onClick={() => navigate("/login")}
        >
          Quay lại đăng nhập người dùng
        </Button>
      </div>

      <div className="mt-4 text-xs text-center text-muted-foreground">
        <p>Admin Demo:</p>
        <p>Email: admin@example.com</p>
        <p>Password: admin123</p>
      </div>
    </div>
  );
};

export default AdminLogin;