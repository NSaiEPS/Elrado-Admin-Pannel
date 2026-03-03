import React, { useEffect, useState } from "react";
import {
  Layout,
  Table,
  Button,
  Space,
  Input,
  Tag,
  ConfigProvider,
  theme,
  Card,
} from "antd";
import { PlusOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllTechnicians } from "../store/actions/technicianActions";
import type { AppDispatch, RootState } from "../store/store";
import Loader from "../components/Loader/Loader";

const { Content } = Layout;
const { darkAlgorithm } = theme;

const Technicians = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { technicians, technicianLoader } = useSelector(
    (state: RootState) => state.technician
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getAllTechnicians(() => {}));
  }, [dispatch]);

  if (technicianLoader) return <Loader />;

  const filteredData = technicians?.filter((tech: any) =>
    tech.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Technician Name",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Assigned Worklists",
      render: (_: any, record: any) => (
        <Tag color="processing">
          {record.assignedWorklists?.length || 0} Assigned
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "active" ? (
          <Tag color="success">Active</Tag>
        ) : (
          <Tag color="default">Inactive</Tag>
        ),
      filters: [
        { text: "Active", value: "active" },
        { text: "Inactive", value: "inactive" },
      ],
      onFilter: (value: any, record: any) => record.status === value,
    },
    {
      title: "Actions",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            onClick={() => handleAssignWork(record)}
          >
            Assign Work
          </Button>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
        </Space>
      ),
    },
  ];

  const handleAssignWork = (technician: any) => {
    console.log("Assign work to:", technician);
    // Open assign modal here
  };

  const handleEdit = (technician: any) => {
    console.log("Edit technician:", technician);
    // Open edit modal here
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: {
          colorPrimary: "#1677ff",
        },
      }}
    >
      <Layout>
        <Content style={{ padding: 24 }}>
          <Card
            title="Technicians Management"
            extra={
              <Button
                type="primary"
                icon={<PlusOutlined />}
              >
                Add Technician
              </Button>
            }
          >
            <Space style={{ marginBottom: 16 }}>
              <Input
                placeholder="Search Technician"
                prefix={<SearchOutlined />}
                allowClear
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Space>

            <Table
              columns={columns}
              dataSource={filteredData}
              rowKey="_id"
              pagination={{ pageSize: 8 }}
              bordered
            />
          </Card>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Technicians;