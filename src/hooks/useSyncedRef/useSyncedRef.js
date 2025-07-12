import { useRef } from "react";

const EMPTY_REF = Symbol("EMPTY_REF");

const useSyncedRef = (ref) => {
  // Inner ref to use and sync with outside ref
  // If the outside ref is already set, sync currents
  // Caveat: if ref is a function, there won't be
  // synced but... it doesn't make much sense to
  // have a useSyncedRef in a component if you are
  // not going to set the ref yourself.
  const innerRef = useRef(ref && ref.current);

  // Ref to memoize the "fake ref API" to ensure that
  // like any real ref we always use the same instance
  const memoRef = useRef();

  // Ref to check if the ref passed to useSyncedRef changed
  // and the memoized ref needs to change as well.
  // Initialized to an special symbol.
  const prevRef = useRef(EMPTY_REF);

  // The  memoRef is always initialized because we
  // check against the symbol. Checks againts null
  // or undefined wouldn't suffice.
  if (prevRef.current !== ref) {
    // Cache the new previousRef.
    prevRef.current = ref;

    // Create the fake Ref. A ref if you look at the
    // react internals is just an object with a current
    // property.
    memoRef.current = {
      // The getter always return the innerRef. The synced
      // ref works either we receive a ref or not.
      get current() {
        return innerRef.current;
      },

      // The setter
      set current(value) {
        // Sets the inner ref to the new current
        innerRef.current = value;

        // If no external ref given, that's all.
        if (!ref) {
          return;
        }

        // If the external ref is a function. Invoke
        // the function with the new value
        if (typeof ref === "function") {
          ref(value);
          return;
        }

        // If the external ref is an object, set its
        // current
        ref.current = value;
      },
    };
  }

  // Always return the memoized ref
  return memoRef.current;
};

export default useSyncedRef;
