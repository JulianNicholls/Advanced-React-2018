import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

describe("App", () => {
  it("contains a CommentBox component", () => {
    const wrapped = shallow(<App />);

    // Check that the component is there
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it("contains a CommentList component", () => {
    const wrapped = shallow(<App />);

    // Check that the component is there
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
