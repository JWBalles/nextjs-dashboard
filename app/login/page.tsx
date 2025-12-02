
5:12 PM
You sent
import { lusitana } from '@/app/ui/fonts';
import LoginForm from '@/app/ui/login-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className={`${lusitana.className} mt-10 text-center text-2xl font-bold leading-9 tracking-tight`}>
          Welcome Back
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </main>
  );
}