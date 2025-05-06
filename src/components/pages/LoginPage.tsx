import { Input } from "../atoms/Input";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const LoginPage = () => {
  return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
      <form className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl text-lime-800 font-bold text-center">
          ログイン
        </h1>
        <div className="w-[80%]">
          <Input
            type="text"
            placeholder="email"
          />
        </div>
        <div className="w-[80%]">
          <Input
            type="password"
            placeholder="password"
          />
        </div>
        <PrimaryBtn>ログイン</PrimaryBtn>
      </form>
    </div>
  );
};
