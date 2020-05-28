import SofiasHookTest from "./SofiasHookTest";

describe("SofiasHookTest", () => {
  const onCountChange = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SofiasHookTest onCountChange={onCountChange} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("show my default test", () => {
    expect(wrapper.find("p").text().toEqual("Count: 0"));
  });
  it("show my default test", () => {
    expect(wrapper.find("p").text().toEqual("Count: 1"));
  });
  it("correctly increments the count by 1", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 4");
  });
});
