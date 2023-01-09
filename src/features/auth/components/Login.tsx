import { useLogin } from "@/features/auth/api/login";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginForm } from "@hyt-sasaki/fetch_client_test";

type LoginTemplateProps = {
  onSubmit: SubmitHandler<LoginForm>;
};
export const LoginTemplate = ({ onSubmit }: LoginTemplateProps) => {
  const { register, handleSubmit } = useForm<LoginForm>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input id="name" {...register("name", { required: true })} />
        </label>

        <label htmlFor="mail">
          Mail:
          <input id="mail" {...register("mail", { required: true })} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export const Login = () => {
  const mutator = useLogin();

  const onSubmit = async (form: LoginForm) => mutator.mutateAsync(form);

  return <LoginTemplate onSubmit={onSubmit} />;
};
