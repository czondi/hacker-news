import { mount } from "@vue/test-utils";
import { sub } from "date-fns";
import HNTimeElapsed from "../components/HNTimeElapsed.vue";

describe("HNTimeElapsed", () => {
  test("shows 'some time ago' and has title 'unkown tine' when time is not given", () => {
    const wrapper = mount(HNTimeElapsed);
    expect(wrapper.text()).toContain("some time ago");
    expect(wrapper.attributes("title")).toBe("unknown time");
  });

  test("shows 'about 1 year ago' and title contains the correct year when time is a year ago", () => {
    const now = new Date();
    const time = Math.floor(sub(now, { years: 1 }).getTime() / 1000);
    const year = now.getFullYear() - 1;

    const wrapper = mount(HNTimeElapsed, {
      props: { time },
    });
    expect(wrapper.text()).toContain("about 1 year ago");
    expect(wrapper.attributes("title")).toContain(year);
  });
});
