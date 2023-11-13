import FormRegister from "./FormRegister";


export function Register () {

    const handleSubmit = (values: { user: string; email: string; password: string; confirmpassword: string; }) => {
    };
    
  return (
    <div>
    <FormRegister onSubmit={handleSubmit} />
    </div>
  );
};

