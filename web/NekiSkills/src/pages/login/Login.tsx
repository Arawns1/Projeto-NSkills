import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { LogIn, Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <Card className="mx-auto my-32 h-auto xl:w-1/3 lg:w-1/2 p-8 md:p-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <CardHeader className="flex flex-col space-y-2 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Faça Login
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Digite seus dados abaixo para acessar sua conta
          </CardDescription>
        </CardHeader>
        <UserAuthForm />
      </div>
    </Card>
  );
}

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

function UserAuthForm({ className }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1 relative">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>

            <Input
              id="password"
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
            {showPassword ? (
              <EyeOff
                className="absolute top-0 bottom-0 my-auto right-3 w-6 h-6 text-gray-500 hover:cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="absolute top-0 bottom-0 my-auto right-3 w-6 h-6 text-gray-500 hover:cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <span>Entrar</span>
            )}
          </Button>
        </div>

        <div className="flex flex-row gap-3 mt-5 w-full items-center justify-start">
          <Checkbox id="rememberMe" />
          <label
            htmlFor="rememberMe"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lembrar-me
          </label>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-5 text-muted-foreground">
            Caso não tenha conta
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={isLoading}>
        <Link
          to={"/signup"}
          className="flex flex-row gap-2 items-center justify-center"
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Cadastre-se</span>
            </>
          )}
        </Link>
      </Button>
    </div>
  );
}
