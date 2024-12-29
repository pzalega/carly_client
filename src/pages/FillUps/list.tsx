import {
  CreateButton,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const FillUpList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="vehicleName" title={"Nazwa pojazdu"} />
        <Table.Column dataIndex="fillUpDate" title={"Data tankowania"} 
          render={(value) => (
            <DateField value={value} />
          )}
        />
        <Table.Column dataIndex="fillUpPrice" title={"Kwota tankowania"} />
        <Table.Column dataIndex="litrePrice" title={"Cena za litr"} />
        <Table.Column dataIndex="fuelLitres" title={"Ilość litrów"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
              <CreateButton title="Dodaj tankowanie" resource="fillUps" meta={{"carId": record.id}}/>
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
