import React from "react";
import {
  Modal,
  Card,
  Tag,
  Descriptions,
  Button,
  ConfigProvider,
  Divider,
  Row,
  Col,
  theme,
} from "antd";


interface WorklistDetailProps {
  selectedWorklist: any;
  open: boolean;
  onClose: () => void;
}

const WorklistDetail = ({
  selectedWorklist,
  open,
  onClose,
}: WorklistDetailProps) => {
  if (!selectedWorklist) return null;

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

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 8,
        },
        components: {
          Modal: {
            contentBg: "#1f1f1f",
            headerBg: "#1f1f1f",
          },
          Card: {
            colorBgContainer: "#262626",
          },
          Descriptions: {
            colorBgContainer: "#262626",
          },
        },
      }}
    >
      <Modal
        open={open}
        onCancel={onClose}
        width={1000}
        centered
        destroyOnClose
        footer={[
          <Button key="assign" type="primary">
            Assign
          </Button>,
          <Button key="reassign">Reassign</Button>,
          <Button key="complete" type="dashed">
            Mark as Completed
          </Button>,
        ]}
        title={
          <Row justify="space-between" align="middle">
            <Col>
              <div style={{ fontSize: 18, fontWeight: 600 }}>
                {selectedWorklist.name}
              </div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Account: {selectedWorklist.accountNumber}
              </div>
            </Col>
            <Col>{getStatusTag(selectedWorklist.workStatus)}</Col>
          </Row>
        }
        styles={{
          body: {
            maxHeight: "70vh",
            overflowY: "auto",
            paddingRight: 8,
          },
        }}
      >
        {/* CUSTOMER INFO */}
        <Card
          title="Customer Information"
          bordered={false}
          style={{ marginBottom: 16 }}
        >
          <Descriptions column={2} size="small">
            <Descriptions.Item label="Address">
              {selectedWorklist.address}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {selectedWorklist.location}
            </Descriptions.Item>
            <Descriptions.Item label="Customer Type">
              {selectedWorklist.customerType}
            </Descriptions.Item>
            <Descriptions.Item label="Utility">
              {selectedWorklist.utility}
            </Descriptions.Item>
            <Descriptions.Item label="Route Number">
              {selectedWorklist.routeNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Balance">
              ₹{selectedWorklist.customerBalance}
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Divider />

        {/* METER DETAILS */}
        <Card
          title="Meter Details"
          bordered={false}
          style={{ marginBottom: 16 }}
        >
          <Descriptions column={2} size="small">
            <Descriptions.Item label="Meter No">
              {selectedWorklist.meterNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Previous Reading">
              {selectedWorklist.previousReading}
            </Descriptions.Item>
            <Descriptions.Item label="Previous Date">
              {new Date(selectedWorklist.previousDate).toLocaleDateString()}
            </Descriptions.Item>
            <Descriptions.Item label="Current Reading">
              {selectedWorklist.currentReading || "Not Submitted"}
            </Descriptions.Item>
            <Descriptions.Item label="Consumption">
              {selectedWorklist.difference || "-"}
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Divider />

        {/* ASSIGNMENT INFO */}
        <Card
          title="Assignment Information"
          bordered={false}
          style={{ marginBottom: 16 }}
        >
          <Descriptions column={2} size="small">
            <Descriptions.Item label="Assigned To">
              {selectedWorklist.assignedTo?.name || "Not Assigned"}
            </Descriptions.Item>
            <Descriptions.Item label="Assigned Date">
              {selectedWorklist.assignedDate
                ? new Date(selectedWorklist.assignedDate).toLocaleString()
                : "N/A"}
            </Descriptions.Item>
            <Descriptions.Item label="Completed Date">
              {selectedWorklist.completedDate
                ? new Date(selectedWorklist.completedDate).toLocaleString()
                : "N/A"}
            </Descriptions.Item>
            <Descriptions.Item label="Taken By">
              {selectedWorklist.takenBy?.name || "N/A"}
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Divider />

        {/* NOTES */}
        <Card title="Technician Notes" bordered={false}>
          <div style={{ opacity: 0.85 }}>
            {selectedWorklist.notes || "No notes available."}
          </div>
        </Card>
      </Modal>
    </ConfigProvider>
  );
};

export default WorklistDetail;
