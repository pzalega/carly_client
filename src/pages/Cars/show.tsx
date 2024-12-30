import { CreateButton, Show  } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions } from "antd";

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
