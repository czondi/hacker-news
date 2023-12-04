import { mount } from "@vue/test-utils";
import HNUser from "../components/HNUser.vue";

describe("HNUser", () => {
  test("shows 'unknown' when user is not given", () => {
    const wrapper = mount(HNUser);
    expect(wrapper.text()).toContain("unknown");
  });

  test("shows 'user' when 'user' is given", () => {
    const wrapper = mount(HNUser, {
      props: { user: "user" },
    });
    expect(wrapper.text()).toContain("user");
  });
});
