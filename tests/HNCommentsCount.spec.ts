import { mount } from "@vue/test-utils";
import HNCommentsCount from "../components/HNCommentsCount.vue";

describe("HNCommentsCount", () => {
  test("shows 'no comments' when no props are given", () => {
    const wrapper = mount(HNCommentsCount);
    expect(wrapper.text()).toContain("no comments");
  });

  test("shows '1 comment' when count is 1", () => {
    const wrapper = mount(HNCommentsCount, {
      props: { count: 1 },
    });
    expect(wrapper.text()).toContain("1 comment");
  });

  test("shows '10 comments' when count is 1", () => {
    const wrapper = mount(HNCommentsCount, {
      props: { count: 10 },
    });
    expect(wrapper.text()).toContain("10 comments");
  });
});
