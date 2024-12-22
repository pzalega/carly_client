import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const CarEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

  const carData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "cars",
    defaultValue: carData?.category,
    queryOptions: {
      enabled: !!carData?.category,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
