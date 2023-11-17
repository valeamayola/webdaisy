import { ThemeSwitcher } from "./Theme";
import Form from "./Form";


export function Login () {

    const handleSubmit = (values: { user: string; password: string }) => {
    };

  return (
    <div className="h-screen flex flex-col justify-center align-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 w-screen backdrop-filter: blur(64px)">
    <ThemeSwitcher />
    <Form onSubmit={handleSubmit} />
    </div>
  );
};

