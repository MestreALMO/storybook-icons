import React from "react";

import { Icon } from "./";
import { CancelOrders } from "./partials/cancelOrders";
import { DirectionSign } from "./partials/directionSign";
import { IconsStoryBookContainer } from "./storybookContainer";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 5fr)" }}>
    <IconsStoryBookContainer iconName="Cancel Order">
      <Icon viewBox="0 0 45 45" {...args}>
        <CancelOrders />
      </Icon>
    </IconsStoryBookContainer>
    <IconsStoryBookContainer iconName="Direction Sign">
      <Icon viewBox="0 0 70 70" {...args}>
        <DirectionSign />
      </Icon>
    </IconsStoryBookContainer>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  height: "50px",
  width: "50px",
  color: "#000",
};
