import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/molecules/InputText";
import { Link } from "../../components/molecules/Link";

export const Login = () => {
  return (
    <article className="flex h-screen w-screen justify-center bg-gray-50">
      <section className="grid h-full w-full  max-w-screen-lg grid-cols-2">
        <aside className="flex">
          <img src="/hero-image.svg" alt="Login Expense" />
        </aside>

        <main className="flex flex-col items-center justify-center  gap-16">
          <h2 className="text-3xl font-bold">Manage Your Spending</h2>

          <form className="flex w-full flex-col gap-4">
            <InputText label="Mail" type="email" />

            <InputText label="Password" type="password" />

            <Button>Sing Up</Button>
          </form>

          <Link href="/register">Sing Up</Link>
        </main>
      </section>
    </article>
  );
};
