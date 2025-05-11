//Đăng nhập
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

const loginFormSchema = z.object({
  email: z.string().email({ message: "Vui lòng nhập email của bạn" }),
  password: z.string().min(6, { message: "Mật khẩu chứa ít nhất 6 ký tự" }),
});

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    setError("");
    
    try {
      if (data.email === "user@example.com" && data.password === "password123") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify({
          id: "1",
          email: data.email,
          name: "Demo User"
        }));
        
        toast({
          title: "Đăng nhập thành công!",
          description: "Chào mừng bạn trở lại!",
        });
        
        navigate("/");
      } else {
        setError("Email hoặc mật khẩu không hợp lệ");
      }
    } catch (err) {
      setError("Đăng nhập thất bại. Hãy thử lại.");
      console.error("Lỗi đăng nhập:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-10 px-4 relative">
      
      <h1 className="text-2xl font-bold text-center mb-6">Đăng nhập</h1>
      
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
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
                <FormLabel>Password</FormLabel>
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
            {isLoading ? "Đang đăng nhập..." : "Login"}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          Bạn không có tài khoản?{" "}
          <Button 
            variant="link" 
            className="p-0 h-auto text-pet-teal"
            onClick={() => navigate("/register")}
          >
            Đăng ký
          </Button>
        </p>
        <div className="mt-2">
          <Button variant="link" className="p-0 h-auto text-pet-teal">
            Quên mật khẩu?
          </Button>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-center text-muted-foreground">
        <p>Demo:</p>
        <p>Email: user@example.com</p>
        <p>Password: password123</p>
      </div>
      <div className="mt-6 text-center text-muted-foreground">
        <p className="text-sm">Bạn là quản trị viên?</p>
      <Button 
        variant="outline" 
        className="mt-2 text-pet-teal border-pet-teal hover:bg-pet-teal/10"
        onClick={() => navigate("/adminlogin")}
      >
        Đăng nhập Admin
      </Button>
</div>

    </div>
  );
};

export default Login;