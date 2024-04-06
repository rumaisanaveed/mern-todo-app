import { Button, Checkbox, Form, Input } from "antd";
import MainLayout from "../../components/Layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import errorHandler from "../../helpers/errorHandler";

export default function Register() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values.email);
    axios
      .post("http://localhost:5001/api/users/register", {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      })
      .then(
        (response) => {
          if (response.status === 201) {
            toast.success("You've successfully signed in.");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
        },
        (error) => {
          errorHandler(error);
        }
      );
  };

  return (
    <MainLayout>
      <div className="flex flex-col p-5 mt-12 max-w-md mx-auto w-full h-fit">
        <h1 className="text-4xl font-bold text-black">Register</h1>
        <p className="text-[#818181] font-normal text-sm py-3">
          Create your account in seconds
        </p>
        <ToastContainer />
        <Form
          layout="vertical"
          autoComplete="off"
          className="mt-5"
          onFinish={(values) => onFinish(values)}
        >
          <Form.Item
            name="firstname"
            label={<p className="text-[#818181]">First Name:</p>}
            rules={[{ required: true, message: "First name is a required." }]}
          >
            <Input className="h-10" placeholder="Enter first name" />
          </Form.Item>
          <Form.Item
            name="lastname"
            label={<p className="text-[#818181]">Last Name:</p>}
            rules={[
              { required: true, message: "Last name is a required field." },
            ]}
          >
            <Input className="h-10" placeholder="Enter last name" />
          </Form.Item>
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
            <Checkbox rootClassName="rm-register-checkbox">
              I agree to the terms and privacy policy
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              className="bg-[#7754F6] text-white font-semibold w-full py-3 h-fit "
              type="primary"
              rootClassName="rm-register-btn"
              htmlType="submit"
            >
              Create account
            </Button>
          </Form.Item>
          <p className="text-[#818181]">
            Already a member? &nbsp;
            <span
              className="text-[#7754F6] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </Form>
      </div>
    </MainLayout>
  );
}
