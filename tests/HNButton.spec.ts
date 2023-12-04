import { mount } from "@vue/test-utils";
import HNButton from "../components/HNButton.vue";

describe("HNButton", () => {
  test("renders", () => {
    const wrapper = mount(HNButton);
    expect(wrapper.html()).toContain("button");
  });

  test("renders with default class", () => {
    const wrapper = mount(HNButton);
    expect(wrapper.classes()).toContain("default");
  });

  test("can render with primary class", () => {
    const wrapper = mount(HNButton, {
      props: { flavor: "primary" },
    });
    expect(wrapper.classes()).toContain("primary");
  });
});
