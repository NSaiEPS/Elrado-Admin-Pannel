import React from "react";
import { Table, Tag, Button, Input, Space, ConfigProvider, theme } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorklists } from "../store/actions/worklistAction";
import type { AppDispatch, RootState } from "../store/store";
import Loader from "../components/Loader/Loader";
import WorklistDetail from "../components/Worklist/WorklistDetail";
import { SearchOutlined } from "@ant-design/icons";

const { darkAlgorithm } = theme;

const Worklists = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { worklistLoader, worklists } = useSelector(
    (state: RootState) => state.worklist,
  );

  const [selectedWorklist, setSelectedWorklist] = React.useState<any>(null);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    dispatch(getAllWorklists(() => {}));
  }, []);

  if (worklistLoader) return <Loader />;

  const getStatusTag = (status: string) => {
    switch (status) {
      case "completed":
        return <Tag color="success">Completed</Tag>;
      case "assigned":
        return <Tag color="processing">Assigned</Tag>;
      case "pending":
        return <Tag color="warning">Pending</Tag>;
      default:
        return <Tag>{status}</Tag>;
    }
  };

  const columns: ColumnsType<any> = [
    {
      title: "Account",
      dataIndex: "accountNumber",
      sorter: (a, b) => a.accountNumber.localeCompare(b.accountNumber),
    },
    {
      title: "Customer Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Location",
      dataIndex: "location",
      filters: [
        ...Array.from(new Set(worklists?.map((w: any) => w.location))).map(
          (loc) => ({
            text: loc,
            value: loc,
          }),
        ),
      ],
      onFilter: (value, record) => record.location === value,
    },
    {
      title: "Route",
      dataIndex: "routeNumber",
      sorter: (a, b) => a.routeNumber - b.routeNumber,
    },
    {
      title: "Status",
      dataIndex: "workStatus",
      filters: [
        { text: "Pending", value: "pending" },
        { text: "Assigned", value: "assigned" },
        { text: "Completed", value: "completed" },
      ],
      onFilter: (value, record) => record.workStatus === value,
      render: (status) => getStatusTag(status),
    },
    {
      title: "Assigned To",
      render: (_, record) => record.assignedTo?.name || "Unassigned",
      sorter: (a, b) =>
        (a.assignedTo?.name || "").localeCompare(b.assignedTo?.name || ""),
    },
    {
      title: "Action",
      render: (_, record) => (
        <Button type="link" onClick={() => setSelectedWorklist(record)}>
          View
        </Button>
      ),
    },
  ];

  const filteredData = worklists?.filter((item: any) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: {
          colorPrimary: "#1677ff",
        },
      }}
    >
      <div style={{ padding: 24 }}>
        <Space style={{ marginBottom: 16 }}>
          <Input
            placeholder="Search by Customer Name"
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
          />
        </Space>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="_id"
          pagination={{ pageSize: 8 }}
          bordered
        />

        {selectedWorklist && (
          <WorklistDetail
            selectedWorklist={selectedWorklist}
            open={!!selectedWorklist}
            onClose={() => setSelectedWorklist(null)}
          />
        )}
      </div>
    </ConfigProvider>
  );
};

export default Worklists;
