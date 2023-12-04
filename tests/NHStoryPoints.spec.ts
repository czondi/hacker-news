import { mount } from "@vue/test-utils";
import HNStoryPoints from "../components/HNStoryPoints.vue";

describe("HNStoryPoints", () => {
  test("shows 'unknown points' when no props are given", () => {
    const wrapper = mount(HNStoryPoints);
    expect(wrapper.text()).toContain("unknown points");
  });

  test("shows '1 point' when score is 1", () => {
    const wrapper = mount(HNStoryPoints, {
      props: { score: 1 },
    });
    expect(wrapper.text()).toContain("1 point");
  });

  test("shows '10 points' when score is 1", () => {
    const wrapper = mount(HNStoryPoints, {
      props: { score: 10 },
    });
    expect(wrapper.text()).toContain("10 points");
  });
});
