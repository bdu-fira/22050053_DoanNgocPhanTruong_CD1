//Đăng ký
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

const registerFormSchema = z.object({
  name: z.string().min(2, { message: "Tên phải ít nhất 2 ký tự" }),
  email: z.string().email({ message: "Nhập địa chỉ email hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Mật khẩu không khớp",
  path: ["Xác nhận mật khẩu"],
});

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    setIsLoading(true);
    setError("");
    
    try {
      // This is a mock registration
      // In a real app, you would connect to a backend service like Supabase
      console.log("Registration data:", data);
      
      toast({
        title: "Đăng ký thành công!",
        description: "Đăng nhập bằng tài khoản của bạn.",
      });
      
      navigate("/login");
    } catch (err) {
      setError("Đăng ký thất bại. Hãy thử lại.");
      console.error("Lôi đăng ký:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Tạo tài khoản</h1>
      
      {error && (
        <Alert className="mb-6 bg-red-50 border-red-200">
          <AlertDescription className="text-red-600">{error}</AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input placeholder="Phan Trường" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xác nhận mật khẩu</FormLabel>
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
            {isLoading ? "Đang tạo tài khoản..." : "Đăng ký"}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          Bạn đã có tài khoản?{" "}
          <Button 
            variant="link" 
            className="p-0 h-auto text-pet-teal"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Register;
