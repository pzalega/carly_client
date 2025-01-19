import { Create, useForm, useSelect} from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";

export const CarCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    warnWhenUnsavedChanges: true,
  });
  const { selectProps } = useSelect({
    resource: "fuelTypes",
    optionLabel: "name",
    optionValue: "id"
  });

  return (
    <Create saveButtonProps={saveButtonProps} >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Nazwa"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label={"Rodzaj paliwa"}
        name={"fuelTypeId"}
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            {...selectProps}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};