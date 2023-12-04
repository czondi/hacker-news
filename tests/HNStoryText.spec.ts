import { mount } from "@vue/test-utils";
import HNStoryText from "../components/HNStoryText.vue";

describe("HNStoryText", () => {
  test("shows 'text' when length is not given", () => {
    const wrapper = mount(HNStoryText, {
      props: { text: "text" },
    });
    expect(wrapper.text()).toContain("text");
  });

  test("shows 't...' when length is 1", () => {
    const wrapper = mount(HNStoryText, {
      props: { text: "text", length: 1 },
    });
    expect(wrapper.text()).toContain("t...");
  });
});
