import { TableOutlined } from "@ant-design/icons";
import { Create, CreateButton, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Descriptions, Button } from "antd";

const { Title } = Typography;

export const CarShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show 
    isLoading={isLoading} 
    title={record?.name} 
    headerButtons={({defaultButtons})=>(
      <>
      {defaultButtons}
      <CreateButton resource="refuelings" meta={{"id": record?.id}}>Dodaj tankowanie</CreateButton>
      </>
    )}>
      <Descriptions >
        <Descriptions.Item label="Nazwa">{record?.name}</Descriptions.Item>
      </Descriptions>
    </Show>
  );
};
