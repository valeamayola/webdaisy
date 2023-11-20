import FormRegister from "./FormRegister";


export function Register () {

    const handleSubmit = (values: { user: string; email: string; password: string; confirmpassword: string; }) => {
    };
    
  return (
    <div className="h-screen items-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 w-screen backdrop-filter: blur(64px) flex justify-center align-center">
    <FormRegister onSubmit={handleSubmit} />
    </div>
  );
};

