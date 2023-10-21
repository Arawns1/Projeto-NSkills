import React, { useState } from "react";
import {
  Button,
  Form,
  YStack,
  Label,
  Input as TamaguiInput,
  Checkbox,
  XStack,
  H2,
  CheckboxProps,
} from "tamagui";
import { Eye, EyeOff, Check } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack.routes";
import { useForm, Controller } from "react-hook-form";
import {
  LoginFormValues,
  LoginRequest,
  LoginResponse,
} from "../types/authTypes";
import { api } from "../services/axios";
import { Text } from "tamagui";
import Input from "../components/auth/Input";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [rememberCredentials, setRememberCredentials] =
    useState<boolean>(false);
  const { control, handleSubmit, formState } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors, isSubmitting } = formState;

  const navigation = useNavigation<StackTypes>();
  const handleLogin = (data: LoginFormValues) => {
    const { email: login, password } = data;
    const reqBody: LoginRequest = {
      login,
      password,
    };
    // api
    //   .post("/auth/login", reqBody)
    //   .then((res: LoginResponse) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.error(err));

    // navigation.navigate("Home");
  };

  return (
    <YStack bg="$backgroundStrong" f={1} jc="center" px={"$5"} gap={"$5"}>
      <H2 mx={"auto"} fontWeight={"600"}>
        Faça seu Login
      </H2>
      <YStack>
        <Form onSubmit={handleSubmit(handleLogin)} gap="$5">
          {/* Input Components */}
          <YStack gap={"$2"}>
            <Label htmlFor="email" fontWeight={"500"} fontSize={"$6"}>
              Email
            </Label>
            <Controller
              control={control}
              name="email"
              rules={{
                required: { value: true, message: "* Campo obrigatório" },
                pattern: {
                  value: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
                  message: "Digite um email válido",
                },
              }}
              render={({ field: { onChange, onBlur } }) => (
                <Input
                  id="email"
                  placeholder="exemplo@email.com"
                  returnKeyType="next"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errorMessage={errors?.email?.message}
                />
              )}
            />
            {console.log(errors)}
          </YStack>
          <YStack gap={"$2"}>
            <Label htmlFor="password" fontWeight={"500"} fontSize={"$6"}>
              Senha
            </Label>
            <Controller
              control={control}
              name="password"
              rules={{
                required: { value: true, message: "* Campo obrigatório" },
              }}
              render={({ field: { onChange, onBlur } }) => (
                <Input
                  id="password"
                  placeholder="Sua senha"
                  secureTextEntry={showPassword}
                  autoCorrect={false}
                  returnKeyType="go"
                  style={{ position: "relative" }}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errorMessage={errors?.password?.message}
                />
              )}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 20,
                top: 45,
              }}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </TouchableOpacity>
          </YStack>

          <CheckBox
            label={"Lembrar-me"}
            rememberCredentials={rememberCredentials}
            setRememberCredentials={setRememberCredentials}
          />

          <Form.Trigger asChild>
            <Button
              bg={"#2d939c"}
              fontSize={"$7"}
              h={"$5"}
              disabled={isSubmitting}
            >
              Entrar
            </Button>
          </Form.Trigger>
        </Form>
      </YStack>

      {/* Create Account Component */}
      <XStack ai="center" jc="center" gap={"$2"}>
        <Text fontFamily="$body" fontWeight={"$10"}>
          Ainda não possui uma conta?
        </Text>
        <Link to={"/Signup"}>
          <Text
            fontFamily="$body"
            color="#2d939c"
            fontSize={18}
            fontWeight={"800"}
          >
            Cadastre-se
          </Text>
        </Link>
      </XStack>
    </YStack>
  );
}

type CheckBoxType = CheckboxProps & {
  rememberCredentials?: boolean;
  setRememberCredentials?: React.Dispatch<React.SetStateAction<boolean>>;
  label?: string;
};
function CheckBox({
  label,
  rememberCredentials,
  setRememberCredentials = () => {},
  ...rest
}: CheckBoxType) {
  return (
    <XStack jc={"flex-start"} ai={"center"} gap={"$3"}>
      <Checkbox
        size="$4"
        id="remember"
        onCheckedChange={() => setRememberCredentials(!rememberCredentials)}
      >
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
      <Label size={"$4"} htmlFor={"remember"}>
        {label}
      </Label>
    </XStack>
  );
}
