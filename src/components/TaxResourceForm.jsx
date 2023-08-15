import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { Radio, Checkbox, Button, Input, Row, Col } from 'antd';

const TaxResourceForm = ({ itemsApiResponse }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        applied_to: 'some',
        items: [],
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3>Add Tax</h3>
          </div>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Input
                readOnly
                value={`Selected items: ${values.items.length}`}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <label>Apply to:</label>
              <Radio.Group
                name="applied_to"
                onChange={handleChange}
                value={values.applied_to}
              >
                <Radio value="some">Some items</Radio>
                <Radio value="all">All items</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <FieldArray name="items">
                {({ push, remove }) => (
                  <div>
                    {itemsApiResponse.map((item) => (
                      <div key={item.id}>
                        <Checkbox
                          name="items"
                          value={item.id}
                          checked={values.items.includes(item.id)}
                          onChange={() => {
                            const updatedItems = values.items.includes(item.id)
                              ? values.items.filter((id) => id !== item.id)
                              : [...values.items, item.id];
                            setFieldValue('items', updatedItems);
                          }}
                        >
                          {item.name}
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Button type="primary" htmlType="submit">
                Apply to {values.items.length} items
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default TaxResourceForm;
