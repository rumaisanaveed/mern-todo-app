import { Button, Checkbox, Form, Input } from "antd";
import MainLayout from "../../components/Layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="flex flex-col p-5 mt-20 max-w-md mx-auto w-full h-fit">
        <h1 className="text-4xl font-bold text-black">Login</h1>
        <p className="text-[#818181] font-normal text-sm py-3">
          Login to your account in seconds
        </p>
        <Form
          layout="vertical"
          autoComplete="off"
          className="mt-5"
          onFinish={(values) => console.log(values)}
        >
          <Form.Item
            name="email"
            label={<p className="text-[#818181]">Email:</p>}
            rules={[
              { required: true, message: "Email address is a required field." },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input className="h-10" placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<p className="text-[#818181]">Password:</p>}
            rules={[
              { required: true, message: "Password is a required field" },
              { min: 6, message: "Password length shouldn't be less than 6." },
            ]}
          >
            <Input.Password className="h-10" placeholder="Enter password" />
          </Form.Item>
          <Form.Item>
            <Checkbox
              rootClassName="rm-register-checkbox"
              className="text-[#818181]"
            >
              Keep me logged in
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              className="bg-[#7754F6] text-white font-semibold w-full py-3 h-fit "
              type="primary"
              htmlType="submit"
            >
              Log in
            </Button>
          </Form.Item>
          <p className="text-[#818181]">
            Don't have an account? &nbsp;
            <span
              className="text-[#7754F6] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Signup
            </span>
          </p>
        </Form>
      </div>
    </MainLayout>
  );
}
