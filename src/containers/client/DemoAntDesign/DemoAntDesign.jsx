import React from 'react';
import { DatePicker, Button } from 'antd';

export default function DemoAntDesign() {
  return (
    <>
      <h1>DemoAntDesign</h1>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  );
}
