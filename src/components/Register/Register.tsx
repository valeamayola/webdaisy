import FormRegister from "./FormRegister";


export function Register () {

    const handleSubmit = (values: { user: string; email: string; password: string; confirmpassword: string; }) => {
    };
    
  return (
    <div>
    <div className="h-screen bg-gradient-to-b from-sky-100 via-sky-300 to-blue-800 w-screen backdrop-filter: blur(64px) flex justify-center align-center">
    <FormRegister onSubmit={handleSubmit} />
    </div>
    </div>
  );
};

