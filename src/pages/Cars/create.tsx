import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input } from "antd";

export const CarCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    warnWhenUnsavedChanges: true,
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
      </Form>
    </Create>
  );
};
