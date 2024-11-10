import { SignInButton } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../_components/ui/button";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="m-auto flex h-full max-w-[500px] flex-col items-start justify-center gap-8">
        <Image src="/logo.svg" alt="Logo" width={174} height={39} />
        <div className="space-y-3">
          <h2 className="text-4xl font-bold">Bem-vindo</h2>
          <p className="font-light">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
        </div>
        <SignInButton>
          <Button variant="outline" className="w-full space-x-2">
            <LogInIcon />
            Entrar com Google
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full">
        <Image
          src="/login.png"
          alt="Faça login"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default LoginPage;

// The <SignIn/> component cannot render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, Clerk is redirecting to the `afterSignIn` URL instead.
// (This notice only appears in development)
