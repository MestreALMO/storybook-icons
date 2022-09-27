import React from "react";

import { Icon } from "./";
import { CancelOrders } from "./partials/cancelOrders";
import { DirectionSign } from "./partials/directionSign";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
};

const Template = (args) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 5fr)" }}>
    <div
      style={{
        border: "1px solid",
        borderColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
      }}
    >
      <Icon height="50px" width="50px" viewBox="0 0 45 45" {...args}>
        <CancelOrders />
      </Icon>
      <p style={{ margin: 0 }}>Cancel Orders</p>
    </div>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
    <Icon {...args}>
      <DirectionSign />
    </Icon>
  </div>
);

export const Primary = Template.bind({});
// Primary.args = {
//   height: "50px",
//   width: "50px",
//   viewBox: "0 0 100 100",
// };
