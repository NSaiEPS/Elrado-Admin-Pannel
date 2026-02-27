import React from "react";
import { Form, Input, Button, Card, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Signup Success:", values);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0F0F14] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#1A1A22]! border-gray-800/50 shadow-2xl rounded-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">
            Create Manager Account
          </h1>
          <p className="text-gray-400">Join the Elrado Admin Panel</p>
        </div>

        <Alert
          message="Only Manager roles can sign up"
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
          className="mb-6 bg-[#111118]! border-purple-900/20 text-purple-200"
          style={{ color: "#d8b4fe" }}
        />

        <Form
          name="signup_manager"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label={<span className="text-gray-400">Email</span>}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Email"
              className="bg-[#111118] border-gray-700/50 text-white hover:border-purple-500 focus:border-purple-500 rounded-lg h-11"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="text-gray-400">Password</span>}
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
              Sign Up as Manager
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Button
              type="link"
              className="text-purple-500 hover:text-purple-400 p-0"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </p>
        </div>
      </Card>

      <style>{`
        .ant-form-item-label label {
          color: #94a3b8 !important;
        }
        .ant-input-affix-wrapper {
          background-color: #111118 !important;
          border-color: #2d2d3d !important;
        }
        .ant-input-affix-wrapper:hover, .ant-input-affix-wrapper-focused {
          border-color: #a855f7 !important;
        }
        .ant-input {
          background-color: transparent !important;
          color: white !important;
        }
        .ant-input::placeholder {
          color: #64748b !important;
        }
        .ant-alert-message {
          color: #d8b4fe !important;
        }
      `}</style>
    </div>
  );
};

export default Signup;
