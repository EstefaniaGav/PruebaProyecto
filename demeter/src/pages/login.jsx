import {useForm} from 'react-hook-form'


function Login() {
  const {register, handleSubmit} = useForm();
  const {signup, Usuario} = useAuth();
  console.log(Usuario)

  const onSubmit = handleSubmit(async(values) =>  {
  signup(values)
  })
  return (
    
    <div>
     <form onSubmit={onSubmit}>
     <input type="email" {...register("Email", {required: true})}/>  
    <input type="text" {...register("username", {required: true})} />
    <input type="password"{...register("password", {required: true})} ></input>
    </form>
    </div>
  )
}

export default Login