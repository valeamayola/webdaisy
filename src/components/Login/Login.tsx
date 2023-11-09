import { ThemeSwitcher } from "./Theme";
import Form from "./Form";


export function Login () {

    const handleSubmit = (values: { user: string; password: string }) => {
    };
    
  return (
    <div>
    <ThemeSwitcher />
    <Form onSubmit={handleSubmit} />
    </div>
  );
};

