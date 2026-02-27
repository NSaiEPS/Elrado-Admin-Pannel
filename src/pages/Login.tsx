import React from "react";
import { Tabs, Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import Loader from "../components/Loader/Loader";

type RoleType = "manager" | "technician";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { authLoader } = useSelector((state: RootState) => state.auth);

  const successCallback = () => {
    navigate("/");
  };

  const handleLogin = (values: LoginFormValues, role: RoleType) => {
    const payload = {
      ...values,
      role, // 🔥 role automatically injected
    };

    dispatch(postLogin(payload, successCallback));
  };

  const renderLoginForm = (role: RoleType) => (
    <Form<LoginFormValues>
      key={role} // ✅ better key handling
      name={`login_${role}`}
      layout="vertical"
      requiredMark={false}
      onFinish={(values) => handleLogin(values, role)}
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          prefix={<UserOutlined className="text-gray-400" />}
          placeholder="Email"
          className="bg-[#111118] border-gray-700/50 text-white hover:border-purple-500 focus:border-purple-500 rounded-lg h-11"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="text-gray-400" />}
          placeholder="Password"
          className="bg-[#111118] border-gray-700/50 text-white hover:border-purple-500 focus:border-purple-500 rounded-lg h-11"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-purple-600! hover:bg-purple-700! border-none rounded-lg h-11 font-semibold mt-2"
        >
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Button>
      </Form.Item>
    </Form>
  );

  const tabItems = [
    {
      key: "manager",
      label: "Login as Manager",
      children: renderLoginForm("manager"),
    },
    {
      key: "technician",
      label: "Login as Technician",
      children: renderLoginForm("technician"),
    },
  ];

  if (authLoader) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#0F0F14] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#1A1A22]! border-gray-800/50 shadow-2xl rounded-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Please enter your details to sign in</p>
        </div>

        <Tabs
          defaultActiveKey="manager"
          centered
          items={tabItems}
          className="custom-tabs"
        />

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Button
              type="link"
              className="text-purple-500 hover:text-purple-400 p-0"
              onClick={() => navigate("/signup")}
            >
              Sign up as Manager
            </Button>
          </p>
        </div>
      </Card>

      {/* Styling */}
      <style>{`
        .custom-tabs .ant-tabs-nav::before {
          border-bottom: 1px solid #2d2d3d;
        }
        .custom-tabs .ant-tabs-tab {
          color: #94a3b8;
        }
        .custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #a855f7 !important;
        }
        .custom-tabs .ant-tabs-ink-bar {
          background: #a855f7;
        }
        .ant-form-item-label label {
          color: #94a3b8 !important;
        }
        .ant-input-affix-wrapper {
          background-color: #111118 !important;
          border-color: #2d2d3d !important;
        }
        .ant-input-affix-wrapper:hover, 
        .ant-input-affix-wrapper-focused {
          border-color: #a855f7 !important;
        }
        .ant-input {
          background-color: transparent !important;
          color: white !important;
        }
        .ant-input::placeholder {
          color: #64748b !important;
        }
      `}</style>
    </div>
  );
};

export default Login;
