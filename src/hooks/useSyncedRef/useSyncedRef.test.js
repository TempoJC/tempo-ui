import React, { createRef } from "react";
import useSyncedRef from "./useSyncedRef.js";
import { render } from "@testing-library/react";

describe("useSyncedRef", () => {
  it("works with object refs", () => {
    let syncedRef;
    let ref = createRef();

    const Comp = () => {
      syncedRef = useSyncedRef(ref);

      return <div ref={syncedRef}>the node</div>;
    };

    render(<Comp />);

    expect(ref.current).toMatchSnapshot();
    expect(syncedRef.current).toBe(ref.current);
  });

  it("works with function refs", () => {
    let syncedRef;
    let node;
    const ref = (r) => {
      node = r;
    };

    const Comp = () => {
      syncedRef = useSyncedRef(ref);

      return <div ref={syncedRef}>the node</div>;
    };

    render(<Comp />);

    expect(node).toMatchSnapshot();
    expect(syncedRef.current).toBe(node);
  });
});
