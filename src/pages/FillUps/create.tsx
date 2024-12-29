import { Create, useForm, useSelect } from "@refinedev/antd";
import { useParsed, useResource, useShow } from "@refinedev/core";
import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router";

export const FillUpCreate = () => {
  const {params} = useParsed();
  const vehicleId = params?.id;
  console.log(vehicleId);

  const {selectProps} = useSelect({
    resource: "vehicles",
    optionLabel: "name",
    optionValue: "id",
    defaultValue: vehicleId,
  });

  const { formProps, saveButtonProps } = useForm({
    warnWhenUnsavedChanges: true,
    action: "create"
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical"
      initialValues={{["fillUpDate"]: dayjs()}}>
        <Form.Item
          label={"Pojazd"}
          name={["vehicleId"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
          {...selectProps} />
          </Form.Item>
        <Form.Item
          label={"Data"}
          name="fillUpDate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker name="fillUpDate" required={true} />
          </Form.Item>
        <Form.Item
          label={"Ile litrów"}
          name={["fuelLitres"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber
            name="fuelLitres"
            min={0.01}
            precision={2}
            decimalSeparator="."></InputNumber>
            </Form.Item>
        <Form.Item
          label={"Cena za litr"}
          name={["litrePrice"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber
            name="litrePrice"
            min={0.01}
            precision={2}
            decimalSeparator=","></InputNumber>
            </Form.Item>
        <Form.Item
          label={"Kwota tankowania"}
          name={["fillUpPrice"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber
            name="fillUpPrice"
            min={0.01}
            precision={2}
            decimalSeparator=","></InputNumber>
        </Form.Item>
      </Form>
    </Create>
  );
};
