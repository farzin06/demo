import AuthForm from "../components/AuthForm";
import FeatureList from "../components/FeatureList";

const RegisterPage = () => {
  return (
    <>
        <div  className="absolute left-[748px] top-[178px]z-10">
          <FeatureList />
        </div>
        <div >
          <AuthForm />
        </div>
    </>
  );
};

export default RegisterPage;
